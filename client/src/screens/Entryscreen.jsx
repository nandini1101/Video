import React,{useState ,useCallback} from "react";
import { useSocket } from "../Context/SocketProvider";

const Entryscreen=()=>{

    const [email,setEmail] = useState("");
    const [room,setRoom] = useState("");

    const socket = useSocket();

    const handleSubmitForm = useCallback((e) =>{
        e.preventDefault();
        socket.emit("room:join",  {email,room});   
    },[email,room,socket]
    );
    return(
        <div>
        <h1>Welcome to Video Chatting App</h1>
        <h3>Enjoy the Conversation</h3>

        {/*user input*/}

        <form onSubmit={handleSubmitForm}>
            <label htmlFor="email">Enter your Mail ID</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <br/>
            <label htmlFor="room">Enter your Room Number</label>
            <input type="text" id="room" value={room} onChange={(e) => setRoom(e.target.value)}/>
            <br/>
            <br/>
            <button>Join</button>

        </form>
        </div>
    )
}

export default Entryscreen;