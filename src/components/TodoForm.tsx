import { useState, ChangeEvent,KeyboardEvent,FormEvent } from "react";
import "../styles/todoform.scss"
import AddIcon from "@mui/icons-material/Add";
import { generateTodoId } from "../utils/GenerateTodoId";
export type TodoProp = {
  id: string;
  text: string;
  completed: boolean;
  date: string
};

export type TodoPropsTypes = {
  todos: TodoProp[]; 
  setTodos: (value: TodoProp[]) => void; 
};

function TodoForm({todos,setTodos}: TodoPropsTypes) {
   const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if(inputValue.length > 2) {
      const existingTodo = todos.find(item=> item.text === inputValue.trim())
if(!existingTodo) {
  setTodos([...todos, {
  id: generateTodoId(),
  text: inputValue.trim(),
  completed: false,
  date: new Date().toLocaleDateString('en-US', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
   hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})
}])
} else {
  alert("this todo already exists!")
}
    }
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
 
  return (
    <form className="todo-form"
    onSubmit={handleSubmit}
    >
     <input type="text"
      value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Listen for Enter key press
          placeholder="Enter something and press Enter"
     />
     <button
     type="submit">
      <AddIcon/>
     </button>
    </form>
  )
}

export default TodoForm