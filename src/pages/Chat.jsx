import { Link } from "react-router-dom";
import Button from "../components/Button";
const Chat = () => {
    return (
        <div>
            ESTOY EN EL CHAT
            <Link to={`/alljobs`}><Button text="jobs" /></Link>
        </div>
    );
};

export default Chat;