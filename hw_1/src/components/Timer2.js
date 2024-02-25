import { useEffect, useState } from "react";

export default function Timer2(params) {
    const [time, setTime] = useState(0);

    useEffect(()=> {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime+1)
    }, 1000);

    return () => {
        clearInterval(timer);
    }

    },[])

    return (
        <div>
            <p>Time {time}</p>
        </div>
    );
}

