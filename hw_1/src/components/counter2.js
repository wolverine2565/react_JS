import { useState } from "react";

export default function Counter2() {
    const[count, setCount] = useState(0)
    
    const updateCount2 = () => {
        setCount(count+1)
    }

    return(

    <div>
        <span>{count}</span>
        <button onClick={()=>{setCount(prevstate=>++prevstate)}}>Counter2</button>
    </div>
    )
}