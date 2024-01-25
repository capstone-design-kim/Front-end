import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/UserProfile.css';
import NavigationUser from '../component/NavigationUser.js';

export default function UserProfile() {
    const navigate = useNavigate();
    const [isToken, setIsToken] = useState(false);
    const [stack, setStack] = useState([]);
    const [profile, setProfile] = useState([]);
    const [stackForm, setStackForm] = useState({ value: "" });
    const [profileForm, setProfileForm] = useState({ contestName: "", stack: "", contestPeriod: "", gitHub: "" });

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

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setStackForm({ ...stackForm, [name]: value });
    };

    const onChangeInput_Plus = (e) => {
        const { name, value } = e.target;
        setProfileForm({ ...profileForm, [name]: value });
    };

    const addStackList = (e) => {
        e.preventDefault();
        setStack([...stack, stackForm]);
        setStackForm({ value: "" });
    };

    const addStackList_Plus = (e) => {
        e.preventDefault();
        setProfile([...profile, profileForm]);
        setProfileForm({
            contestName: "",
            stack: "",
            contestPeriod: "",
            gitHub: ""
        });
    };

    const removeStackList = (index) => {
        const removedBookList = stack.filter((_, i) => i !== index);
        setStack(removedBookList);
    };

    const removeProfileList = (index) => {
        const removedProfileList = profile.filter((_, i) => i !== index);
        setProfile(removedProfileList);
    };

    try {
        axios({
        })
    } catch {
    }

    return (
        <div>
            {window.location.pathname.includes('/UserProfile') && <NavigationUser />}
            <form className="user_file_form_box">
                <div><input className="user_introduce" maxLength={50} type="text" placeholder="자기 소개를 한 줄로 간단하게 해주세요!" /></div>
                <div className="user_stack_big_box">
                    <div className="user_stack_box">
                        <input
                            type="text"
                            name="value"
                            value={stackForm.value}
                            className="user_stack"
                            onChange={onChangeInput}
                            placeholder="기술 스택을 입력하세요"
                        />
                        <button onClick={addStackList}>
                            추가
                        </button>
                    </div>
                    <div className="user_profile_list_box">
                        <ul>
                            {stack.map((item, index) => (
                                <li key={index}>
                                    {item.value}
                                    <button type="button" onClick={() => removeStackList(index)}>x</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="user_profile_big_box">
                    <div className="user_profile_box">
                        <input
                            type="text"
                            name="contestName"
                            value={profileForm.contestName}
                            className="user_profile_contestName"
                            onChange={onChangeInput_Plus}
                            placeholder="공모명을 입력하세요"
                        />
                        <input
                            type="text"
                            name="stack"
                            value={profileForm.stack}
                            className="user_profile_stack"
                            onChange={onChangeInput_Plus}
                            placeholder="기술 스택을 입력하세요"
                        />
                        <input
                            type="text"
                            name="contestPeriod"
                            value={profileForm.contestPeriod}
                            className="user_profile_contestPeriod"
                            onChange={onChangeInput_Plus}
                            placeholder="공모전 기간(일수)를 입력하세요"
                        />
                        <input
                            type="text"
                            name="gitHub"
                            value={profileForm.gitHub}
                            className="user_profile_gitHub"
                            onChange={onChangeInput_Plus}
                            placeholder="깃허브 주소를 입력하세요"
                        />
                        <button onClick={addStackList_Plus}>
                            추가
                        </button>
                    </div>
                    <div className="user_profile_list_box">
                        <ul>
                            {profile.map((item, index) => (
                                <li key={item.id}>
                                    <div>
                                        <div><p>공모명</p> - {item.contestName}<br /></div>
                                        <div><p>기술 스택</p> - {item.stack}<br /></div>
                                        <div><p>공모전 기간(일수)</p> - {item.contestPeriod}<br /></div>
                                        <div><p>깃허브 주소</p> - {item.gitHub}</div>
                                    </div>
                                    <button type="button" onClick={() => removeProfileList(index)}>x</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="user_profile_button_box">
                    <button type="button">저장</button>
                    <button type="button">리셋</button>
                </div>
            </form>
        </div>
    );
}
