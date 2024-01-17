import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/MyPage.css';
import Logo from '../Logo.js';
import { faUser, faLock, faPerson, faEnvelope, faPhone, faHouse, faVenusMars, faUsers, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function MyPage() {
    const navigate = useNavigate();
    const [isToken, setIsToken] = useState(false);

    useEffect(() => {
        setIsToken(window.localStorage.getItem('token'));
        if (isToken == false) {
            navigate('/SignUI');
        }
    })

    return (
        <div>
            {window.location.pathname.includes('/MyPage') && <Logo />}
        </div>
    );
}
