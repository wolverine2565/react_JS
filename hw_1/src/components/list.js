import React, {useState}from "react";

export function MessageList() {
    const[messages, setMessages] = useState([
        {id:'id1', text:'messge 1', heading: '1'},
        {id:'id2', text:'messge 2', heading: '2'},
        {id:'id3', text:'messge 3', heading: '3'}
    ]);

    return messages.map((message) => <div>
        <h2>{message.heading}</h2>
        <div key={message.id}>{message.text}</div>
        </div>);
}

export default MessageList;