import './App.css';
import ChatWindow from './ChatWindow';
import ChatRoomSelector from "./ChatRoomSelector";


function App() {
    return (
        <div className="App" style={{display: "flex"}}>

            <ChatRoomSelector/>

            <header className="App-header"></header>
        </div>
    );
}

export default App;