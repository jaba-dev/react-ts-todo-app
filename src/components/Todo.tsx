import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import "../styles/todo.scss"
type TodoProp = {
  todo: {
id: string;
  text: string;
  completed: boolean;
  date: string 
  }
  
  onDelete: (id:string) => void; // Callback for deleting the todo
  onToggleComplete: (id: string) => void; // Callback for toggling todo completion
};

function Todo({todo, onDelete,onToggleComplete }: TodoProp) {

  return (
      <article className={`todo ${todo.completed ? 'completed' : ''}`}>
      <section className="todo-info">
        <div className="todo-text">
          <h2>{todo.text}</h2>
          <p>{todo.date}</p>
        </div>
        <div className="todo-actions">
          <button onClick={()=>onToggleComplete(todo.id)}>
            <CheckIcon color={todo.completed ? 'primary' : 'action'} />
          </button>
          <button onClick={()=>onDelete(todo.id)}>
            <DeleteIcon color="error" />
          </button>
        </div>
      </section>
    </article>
  )
}

export default Todo