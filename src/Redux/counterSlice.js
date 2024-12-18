import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({  // part of the state, for creating action and reducer togather(not separately)

    name:'counter',
    initialState:{
        count:0
    },
    reducers:{

        increment:(state)=>{  // state holds the initialState
            state.count++
        },
        decrement:(state)=>{
            state.count--
        },
        reset:(state)=>{
          return  {...state,count:0}
        },
        incrementByAmount:(state,action)=>{
          state.count+=action.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount}=counterSlice.actions

export default counterSlice.reducer  // counterSlice will provide the reducer