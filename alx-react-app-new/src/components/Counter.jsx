import { useState } from "react";

function Counter(){
    let [count, setCount] = useState(0)
    return(
        <div>
            <p>Current Count: {count}</p>
            <button onClick={()=>setCount(count ++)}>Increment</button>
            <button onClick={()=>setCount(count --)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}