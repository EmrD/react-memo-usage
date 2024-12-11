import { memo } from "react"

function Counter({count ,setCount}) {

    console.log("counter rendered")

    return (
        <div className="flex flex-col">
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default memo(Counter)