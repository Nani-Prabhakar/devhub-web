import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './UserSlice'
import feedSlice from './feedSlice'
const store = configureStore({
  reducer: {
    user:userReducer,
    feed:feedSlice,
  },
})

export default store;