import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/MyPage.css';
import NavigationUser from '../component/NavigationUser.js';

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
            {window.location.pathname.includes('/MyPage') && <NavigationUser />}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
