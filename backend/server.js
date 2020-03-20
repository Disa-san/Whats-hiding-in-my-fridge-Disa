import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose, { MongooseDocument } from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt-nodejs'


//connect to database:
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/fridge"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

//user model with validation rules:
const User = mongoose.model('User', {
  name: {
    type: String,
    unique: true,
    required: true,
    minlength: 4
  },
  email: {
    email: mongoose.SchemaTypes.Email,
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 4
  },
  accessToken: {
    type: String,
    //default accesstoken created with the Crypto library
    default: () => crypto.randomBytes(128).toString('hex')
  }
})

const Items = mongoose.model('Items', {
  user: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  food: {
    type: String,
    required: true,
    minlength: 1
  },
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,

  }
})

//Middleware-function
//The param next will let express know what to do when authorization has taken place
const authenticateUser = async (req, res, next) => {
  //Here the user is identified via the accessToken in the header's authorization-field.
  const user = await User.findOne({ accessToken: req.header('Authorization') })
  if (user) {
    req.user = user
    next()
  } else {
    res.status(403).json({ message: "You need to login to access this page" })
  }
}

// Defines the port the app will run on. 
const port = process.env.PORT || 8000
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

//Registration endpoint where name, email and password can be assigned to a User in the database 
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password: bcrypt.hashSync(password) })
    user.save()
    res.status(201).json({ id: user._id, accessToken: user.accessToken, message: "✨Created user ✨" })
  } catch (err) {
    res.status(400).json({ message: 'Could not create User', errors: err.errors })
  }
})



//Logging in endpoint
app.post('/sessions', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  //cleartext password from request compared to hashed password in database
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.json({ userId: user._id, accessToken: user.accessToken })
  }
  else {
    res.json({ notFound: true, message: 'The user was not found or entered password is wrong' })
    res.status(400).json({ notFound: true })
  }
})

//adding items to fridge
app.post('/items', authenticateUser, async (req, res) => {
  try {
    const { food, number, date } = req.body
    const user = await User.findOne({ accessToken: req.header('Authorization') })
    const item = new Items({ food, number, date, user })
    const saved = await item.save(user)
    res.status(201).json({ saved, message: "item added" })
  } catch (err) {
    res.status(403).json({ message: "Could not add item", errors: err.errors })
  }
})

//GET fridge items
//Applies the middleware-function above that checks authentication
app.get('/items', authenticateUser)
app.get('/items', async (req, res) => {
  const items = await Items.find({ user: req.user }).sort({ date: +1 })
  if (Items)
    return (
      res.json({ message: "These are the items in your frige:", items })
    )
  else {
    res.status(404).json({ message: "no food added yet" })
  }
})

//delete item from fridge
app.delete('/items/:id', async (req, res) => {
  try {
    const removeItem = await Items.deleteOne({ _id: req.params.id })
    res.json(removeItem)
  } catch (error) {
    res.status(403).json({ message: "Item could not be deleted" })
    console.log(error)
  }
})



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})