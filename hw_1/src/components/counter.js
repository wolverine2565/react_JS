import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

const updateCount = () => {
    setCount(count+2);
}

const resetCount = () => {
    setCount(0);
}



    return (
        
        <div>
            <span>
                <span>{count}</span>
                <button onClick={updateCount}>click+2</button>
                <button onClick={resetCount}>reset</button>
                <button onClick={()=>{setCount(prevstate=>++prevstate)}}>click+1</button>
                <button onClick={()=>{setCount(prevstate=>--prevstate)}}>click-1</button>
            </span>
        </div>
      );
}

export default Counter;