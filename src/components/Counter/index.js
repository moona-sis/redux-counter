import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


function Counter({ value}) {
    const dispatch = useDispatch()
    const {counter} = useSelector((state)=>state.counter)
    return (
        <div>
            <div>
  <h1>{counter}</h1>
  <button onClick={()=>{
      dispatch ({type: 'INCREMENT', payload:counter+1})
  }}>+</button>
  <button onClick={()=>{
      dispatch ({type: 'DECREMENT', payload:counter-1})
  }}>-</button>
  </div>
        </div>
    )
}

export default Counter
