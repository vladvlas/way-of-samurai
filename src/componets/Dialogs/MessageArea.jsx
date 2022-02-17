import React from 'react'
import style from './MessageArea.module.css'

const MessageArea = () => {

    let NewMessageElement = React.createRef();

    const sendMessage = () => {
        let text = NewMessageElement.current.value;
        console.log(text)
    }

    return (
        <div>
            <textarea ref={NewMessageElement} className={style.textarea}></textarea>
            <button onClick={sendMessage}>Send message</button>
        </div>
    )
}

export default MessageArea;