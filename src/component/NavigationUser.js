import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navigation.css';

export default function NavigationUser() {
    const navigate = useNavigate();
    const [isToken, setIsToken] = useState(false);

    useEffect(() => {
        setIsToken(window.localStorage.getItem('token'));
    })

    const logoutbtn = e => {
        e.preventDefault();
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('username');
        setIsToken(false)
        navigate('/');
    }

    return (
        <div>
            <div className="myPage_main">
                <div className="profile_box">
                    <div className="profile_img"></div>
                    <p className="myPage_main_font">유저님 어서오세요!</p>
                </div>
                <p className="myPage_main_font_p" onClick={logoutbtn}>로그아웃</p>
                <Link className="myPage_main_font" to={'/UserProfile'}>유저 프로필</Link>
                <Link className="myPage_main_font" to={'/UserModify'}>회원정보 수정</Link>
                <Link className="myPage_main_font" to={'/UserDelete'} >회원 탈퇴</Link>
            </div>
        </div>
    );
}
