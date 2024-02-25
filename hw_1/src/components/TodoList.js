import { useState } from "react";

export default function TodoList(params) {
    const [inputText, setinputText] = useState('');
    const [arr, setArr] = useState([]);


function clickHandler() {
    if (!inputText.trim()) {
        return;
    }
    setArr([...arr, inputText]);
    setinputText('');
}

return (
    <div>
        <label htmlFor="input">Введите текст:</label>
        <input 
        onChange={(event) => setinputText(event.target.value)}
        type="text"
        id="input"
        value={inputText}
        maxLength={10}
        ></input>
        <button onClick={clickHandler}>Добавить</button>
        <ul>{arr.map((item) => (<li key={arr.indexOf(item)}>{item}</li>))}</ul>
    </div>
)
}