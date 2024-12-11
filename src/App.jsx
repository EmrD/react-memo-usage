import { useState } from "react";
import Counter from "./Counter";
import TodoApp from "./TodoApp";

function App() {

  console.log("app rendered")

  const [todo, setTodo] = useState("")

  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState([])

  return (
    <>
        <Counter count={count} setCount={setCount} />
        <TodoApp todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App;