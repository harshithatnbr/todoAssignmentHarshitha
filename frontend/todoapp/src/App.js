
import { useState } from 'react'
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from './components/Todos'
import { DeleteTodo } from './components/DeleteTodo';
function App() {
     const [todos, setTodos] = useState([]);
return (
  <div className='App'>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
    <DeleteTodo></DeleteTodo>
  </div>
);
}

export default App;
