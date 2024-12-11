import { memo, useCallback } from "react"

function TodoApp({ todo, todos, setTodo, setTodos }) {
    const clickhandle = useCallback(() => {
        setTodos([...todos, todo])
        setTodo("")
    } , [todo , todos])

    console.log("todoapp rendered")

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center justify-content-center">
            <input type="text" placeholder="Enter Todo" onChange={e => setTodo(e.target.value)} value={todo} />
            <br />
            <button onClick={clickhandle}>Add</button>
            <ul>
                {todos.map((todo, i) => <li key={i}>{todo}</li>)}
            </ul>
        </div>
    )
}

export default memo(TodoApp)