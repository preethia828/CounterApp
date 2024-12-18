import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'


function Count() {

  const [amount,setAmount]=useState("")
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()

 const handleIncrementByAmount = ()=>{
  if(amount){
    dispatch(incrementByAmount(Number(amount))) // also you can use parseInt
  }
  else{
    alert("Please enter the value")
  }
 }
  return (
    <>
      <div className=' bg-dark' style={{height:"100vh"}}>
         <h3 className='text-center text-light mb-5'>Counter App</h3>
         <div className='container border border-3 border-light bg-dark w-75 d-flex flex-column align-items-center justify-content-center ' style={{height:"70vh"}}>
                <h3 className='text-light mb-4'>{count}</h3>
              <div className='d-flex justify-content-center align-items-center'>
                  <button onClick={()=>dispatch(increment())} className='btn btn-warning me-5'>Increment</button>
                  <button onClick={()=>dispatch(reset())}  className='btn btn-danger me-5'>Reset</button>
                  <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>
              </div>
              <div className='d-flex justify-content-center mt-5'>
                <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control me-3 ' placeholder='Enter the value' />
                <button onClick={handleIncrementByAmount} className='btn btn-primary'>Increment by Amount</button>
              </div>
         </div>
      </div>
    </>
  )
}

export default Count