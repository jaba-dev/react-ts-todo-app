import React from 'react'
import { TodoPropsTypes } from "./TodoForm"
import Todo from "./Todo"
import "../styles/todoitems.scss"

function TodoItems({todos,setTodos}: TodoPropsTypes) {
 const toggleComplete = (id: string) =>{
  // Find the index of the todo with the given id
  const todoIndex = todos.findIndex((item) => item.id === id);

  // Ensure that the todo with the given id exists
  if (todoIndex !== -1) {
    // Create a new array of todos with the updated completion status
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = {
      ...updatedTodos[todoIndex],
      completed: !updatedTodos[todoIndex].completed,
    };

    // Update the state with the new array of todos
    setTodos(updatedTodos);
  }
 }
 const handleDelete = (id: string) =>{
 // Create a new array of todos that excludes the todo with the specified id
  const updatedTodos = todos.filter((todo) => todo.id !== id);

  // Update the state with the new array of todos
  setTodos(updatedTodos);
 }
  return (
    <div className="todos-container">
     {todos.map(item=>{
      return <Todo key={item.id} todo={item} onDelete={handleDelete}
      onToggleComplete={toggleComplete}
      />
     })}
    </div>
  )
}

export default TodoItems