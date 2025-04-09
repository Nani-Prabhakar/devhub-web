import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './UserSlice'
import feedSlice from './feedSlice'
import connectionReducer from './conectionSlice'
import requestReducer from './requestSlice'
const store = configureStore({
  reducer: {
    user:userReducer,
    feed:feedSlice,
    connections:connectionReducer,
    requests:requestReducer
  },
})

export default store;