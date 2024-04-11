import { configureStore } from '@reduxjs/toolkit'
import authReducer from './front/home/authSlice'
import ProductReducer from './admin/product/productSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    product:ProductReducer
  }
})