import React from 'react'
// import "./styles.css";

import { useState } from "react";
let globalID = 0
export default function App() {
  
  const[todos,setTodos] = useState([])
  const[task,setTask] = useState('')
  function cretaeTodo(e){
    e.preventDefault()
    setTodos(oldTodos=> {
      setTask('')
      return[...oldTodos,{todo: task, id: globalID++}]})
  }
  function remove(itemID){
    setTodos(oldTodos=> oldTodos.filter(item=>item.id!==itemID))
  }
  return (
    <div className="App">
      <form onSubmit={cretaeTodo}>
      <h1>Todo List</h1>
      <input type='text' value={task} onChange={e=>{setTask(e.target.value)}}/>
      <button type='submit' >Add Task</button>
      </form>
      <ul>
        {todos.map((item)=>{
          return (
            <div key={item.id}>
              <li>{item.todo}{`(${item.id})`}</li>
              <button onClick={()=>remove(item.id)}>Delete</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

