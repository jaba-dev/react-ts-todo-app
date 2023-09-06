import './App.scss';
import TodoForm from './components/TodoForm';
import useLocalStorage from "./hooks/useLocalstorage";
import { TodoProp } from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

 

function App() {
 const [todos, setTodos] = useLocalStorage<TodoProp[]>('todos', []);

  return (
    <div className="todo-container">
     <h1>Todo App</h1>
     <TodoForm todos={todos} setTodos={setTodos} />
     <TodoItems todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
