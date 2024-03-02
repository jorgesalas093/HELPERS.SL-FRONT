import { Link } from "react-router-dom";
import Button from "../components/Button";
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { createHttp } from '../../services/BaseService';




const Chat = () => {
    return (
        <div>
            ESTOY EN EL CHAT
            <Link to={`/alljobs`}><Button text="jobs" /></Link>
        </div>
    );
};

export default Chat;