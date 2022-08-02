import React, { useReducer } from 'react'
import './App.css'

function reducer(state,action){
  switch (action.type) {
    case 'INCREMENT':{
      return{
        ...state,
        counter: state.counter + state.step
      } 
    }  
    case 'Increment_Step':{
      return{
        ...state,
        step: state.step + action.payload
      }
    }
    case 'Decrement_Step':{
      return{
        ...state,
        step: state.step - action.payload
      }
    }
    default:{
      console.log(state.step)
      return state
    }
      
  }
}
export default function App(){
  const[state,dispatch] = useReducer(reducer,{counter:0,step:0})
  return(
    <div className='App'>
      <h1 onClick={()=>dispatch({type: 'INCREMENT'})}>Counter: {state.counter}</h1>
      <h3>Step: {state.step}</h3>
      <button onClick={()=>dispatch({type:'Increment_Step', payload: 1})}>+</button>
      <button onClick={()=>dispatch({type:'Decrement_Step', payload: 1})}>-</button>
    </div>
  )
}