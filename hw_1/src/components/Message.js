import './Message.css'

function Message(props) {
    const propsBoolean = true;
    return (
        <div className='message'>
            <h2 style={{color: (props.author==='Amazon') ? 'red' :'blue'}}>{props.author}: </h2>
            <p>{props.text}</p>
        </div>       
    )
}

export default Message;