import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scategoriesReducer from "../features/scategorieSlice"

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storecart:cartSliceReducer,
storescategories:scategoriesReducer

}
}) 
export default store