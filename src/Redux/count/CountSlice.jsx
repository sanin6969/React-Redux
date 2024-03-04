import { createSlice } from "@reduxjs/toolkit";

export const countslice = createSlice({
    name: 'count',
    initialState: {
        value: 0
    },
    reducers: {
        increaseCount: (state)=>{ 
            state.value +=1
        },
        decreaseCount:(state)=>{
            state.value -=1
        }
    }
})
export const {increaseCount,decreaseCount}=countslice.actions
export default countslice.reducer