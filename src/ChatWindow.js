import './App.css';
import {useEffect, useState} from "react";

function ChatWindow({chatNumber}) {

    let [messages, setMessage] = useState([]);
    let [userName, setUserName] = useState('username');
    let [currentMessage, setCurrentMessage] = useState({"message": '', "user": ""});

    useEffect(() => {
        setInterval(fetchAllMessages, 1000);
    }, []);

    function fetchAllMessages() {
        fetch('/messages/' + chatNumber)
            .then(response => {
                response.json().then(messages => {
                    setMessage(messages);
                })
            });
    }

    function handleText(event) {
        setCurrentMessage({message: event.target.value, user: userName});
    }

    function handleUserName(event) {
        setUserName(event.target.value);
        setCurrentMessage({message: currentMessage.message, user: event.target.value});
    }

    function handleSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(currentMessage)
        };

        fetch('/messages/' + chatNumber, requestOptions);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div>Viewing chat room # {chatNumber}</div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {messages.map(value =>
                    <>
                        <div>From: {value.user} </div>
                        <div>{value.message} </div>
                    </>
                )}
            </div>
            <input type="text" value={currentMessage.message} onChange={handleText}/>
            <input type="submit" value="send message" onClick={handleSubmit}/>
            <input type="text" value={userName} onChange={handleUserName}/>
        </div>
    );
}

export default ChatWindow;