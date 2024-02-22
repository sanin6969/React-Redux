import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './color/ColorSlice'
import countReducer from './count/CountSlice'
export default configureStore({
    reducer: {
        color: colorReducer,
        count:countReducer
    }    
})