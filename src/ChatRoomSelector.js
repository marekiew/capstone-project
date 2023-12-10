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
        fetch('/api/chats')
            .then(response => {
                response.json().then(chats => {
                    setChats(chats);
                })
            });
    }

    function deleteChatRooms() {
        fetch('/api/chats', { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    
                    console.log('All chat rooms deleted successfully');
                } else {
                    
                    console.error('Failed to delete chat rooms');
                }
            })
            .catch(error => {
                console.error('Error:', error);
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
           <button className="delete" onClick={deleteChatRooms}>Delete All Chat Rooms</button>
        
       </div>

    }

    return (

        <>{chatRoomSelected === null ? showSelector() : <ChatWindow chatNumber={chatRoomSelected}></ChatWindow>}

        </>
        
    );
}

export default ChatRoomSelector;