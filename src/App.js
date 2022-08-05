import React from 'react'
import { useLocalStorage } from './Hooks'

const App = () => {

    const[name,setName] = useLocalStorage('user-name', 'Ankit')
    const[email,setEmail] = useLocalStorage('user-email', 'ankit@gmail.com')
  return (
    <div className='App'>
        <h1>Name: {name}</h1>
        <input type='text' value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>
        <h1>Email: {email}</h1>
        <input type='text' value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
    </div>
  )
}

export default App