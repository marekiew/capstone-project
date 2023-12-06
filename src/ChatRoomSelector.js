import './App.css';
import ChatWindow from './ChatWindow';
import {useEffect, useState} from "react";

function ChatRoomSelector() {


    const [chats, setChats] = useState([]);
    const [chatRoomSelected, setChatRoomSelected] = useState(null);

    useEffect(() => {
        fetchAllChats();
    }, []);

    function fetchAllChats() {
        fetch('/chats')
            .then(response => {
                response.json().then(chats => {
                    setChats(chats);
                })
            });
    }


    function createNewChat() {
        setChatRoomSelected(chats.length + 1);
    }

    function showSelector() {
       return <div>
            {chats.map(chatRoomNumber =>
                <div>
                    <div>Chat room: #{chatRoomNumber} </div>
                    <button className="enter-chat" value={chatRoomNumber} onClick={event => setChatRoomSelected(chatRoomNumber)}>Enter chat
                        room
                    </button>

                    <br/>
                </div>

            )}
           <button className="create-new-chat" onClick={createNewChat}>Create new chat </button>

       </div>

    }

    return (

        <>{chatRoomSelected === null ? showSelector() : <ChatWindow chatNumber={chatRoomSelected}></ChatWindow>}

        </>
    );
}

export default ChatRoomSelector;