import React, { useReducer } from 'react'
import './App.css'
import Context from './Context'
import RemoteComponent from './RemoteComponent'

function reducer(state, action){
  switch (action.type){
    case 'SET_DARK_THEME':{
      return {
        ...state,
        theme: 'dark'
      }
    }
    case 'SET_LIGHT_THEME':{
      return{
        ...state,
        theme: 'light'
      }
    }
    default:
  }
}

function App(){

  const[state,dispatch] = useReducer(reducer,{
    theme:'dark'
  })
  return(
    <div className='App'>
      <Context.Provider value={{state,dispatch}}>
        <h2> I am a local</h2>
      <RemoteComponent/>
      </Context.Provider>
    </div>
  )
}

export default App