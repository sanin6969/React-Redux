import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './color/ColorSlice'
export default configureStore({
    reducer: {
        color: colorReducer
    }
})