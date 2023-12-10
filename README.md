# Chat Application - Frontend "Chat Me"

### Description:
The frontend of the chat application is developed using React, providing a UI for interacting with chat rooms and sending or receiving messages.
The frontend communicates with Flask backend using HTTP request 'fetch' to retreive chat rooms and messages.
'ChatRoomSelector' fetches and displays existing chat rooms.
'ChatWindow' fetches and displays messages for chat room that has been selected by user.


### Features:
Components for selecting chat rooms, sending messages and has a message history.

### How to run the application:
Make sure Node.js and npm are installed.
Run command 'npm install' to install dependencies.
Use command 'npm start' to launch frontend application.

### User guide
To create a chat room click on "create new chat" button. Insert your username and send your message. Refresh the page to access all the existing chat rooms.
'new chat room created only after a message has been sent'.
You can delete all existing chat rooms and message history by clicking 'Delete all chat rooms" button. Changes appear after you refresh the page.
