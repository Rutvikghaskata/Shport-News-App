import { configureStore } from '@reduxjs/toolkit'
import loading from './redux/reducer'

export default configureStore({
  reducer: {
    loading : loading
  },
})