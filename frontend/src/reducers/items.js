import { createSlice } from '@reduxjs/toolkit'

export const items = createSlice({
  name: 'items',
  initialState: {
    items: []
  },

  reducers: {
    removeItem: (state, action) => {
      state.items = state.items.id((id) => items.id !== action.payload)
    }
  }
})