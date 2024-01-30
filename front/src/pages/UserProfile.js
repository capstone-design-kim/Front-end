import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/UserProfile.css';
import NavigationUser from '../component/NavigationUser.js';
import Swal from 'sweetalert2';

export default function UserProfile() {
    const navigate = useNavigate();
    const [isToken, setIsToken] = useState(false);
    const [userId, setUserId] = useState('');
    const [stack, setStack] = useState([]);
    const [profile, setProfile] = useState([]);
    const [stackForm, setStackForm] = useState({ value: "" });
    const [profileForm, setProfileForm] = useState({ contestName: "", stack: "", contestPeriod: "", gitHub: "" });

    useEffect(() => {
        setIsToken(window.localStorage.getItem('token'));
        setUserId(window.localStorage.getItem('userId'));
    })

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
        if (stackForm.value === "") {
            Swal.fire({
                title: "공백은 추가할 수 없습니다"
            })
        } else {
            setStack([...stack, stackForm]);
            setStackForm({ value: "" });
        }
    };

    const addStackList_Plus = (e) => {
        e.preventDefault();
        if (Object.values(profileForm).some(value => value === "")) {
            Swal.fire({
                title: "공백은 추가할 수 없습니다"
            })
        } else {
            setProfile([...profile, profileForm]);
            setProfileForm({
                contestName: "",
                stack: "",
                contestPeriod: "",
                gitHub: ""
            });
        }
    };

    const removeStackList = (index) => {
        const removedStackList = stack.filter((_, i) => i !== index);
        setStack(removedStackList);
    };

    const removeProfileList = (index) => {
        const removedProfileList = profile.filter((_, i) => i !== index);
        setProfile(removedProfileList);
    };

    const saveUserProflie = (e) => {
        e.preventDefault();
        let user_intro = document.querySelector('#user_profile_intro').value;
        if (user_intro === "") {
            Swal.fire({
                title: "자기 소개를 입력해주세요"
            })
        } else if (stack.length === 0) {
            Swal.fire({
                title: '기술 스택란이 비었습니다 이대로 진행할까요?',
                text: '후에 프로필 수정이 가능합니다',
                icon: 'warning',
                showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
                cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                cancelButtonText: '취소', // cancel 버튼 텍스트 지정

                reverseButtons: true, // 버튼 순서 거꾸로

            }).then(result => {
                // 만약 Promise리턴을 받으면,
                if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                    if (profile.length === 0) {
                        Swal.fire({
                            title: '공모 관련 정보가 비었습니다 이대로 진행할까요?',
                            text: '후에 프로필 수정이 가능합니다',
                            icon: 'warning',
                            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                            confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
                            cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                            confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                            cancelButtonText: '취소', // cancel 버튼 텍스트 지정

                            reverseButtons: true, // 버튼 순서 거꾸로

                        }).then(result => {
                            // 만약 Promise리턴을 받으면,
                            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                                submitUserProfile(user_intro);
                            }
                        })
                    } else {
                        submitUserProfile(user_intro);
                    }
                }
            })
        } else if (profile.length === 0) {
            Swal.fire({
                title: '공모 관련 정보가 비었습니다 이대로 진행할까요?',
                text: '후에 프로필 수정이 가능합니다',
                icon: 'warning',
                showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                confirmButtonColor: '#3085d6', // confrim 버튼 색깔 지정
                cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
                confirmButtonText: '확인', // confirm 버튼 텍스트 지정
                cancelButtonText: '취소', // cancel 버튼 텍스트 지정

                reverseButtons: true, // 버튼 순서 거꾸로

            }).then(result => {
                // 만약 Promise리턴을 받으면,
                if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면
                    submitUserProfile(user_intro);
                }
            })
        } else {
            submitUserProfile(user_intro);
        }
    }

    const submitUserProfile = (user_intro) => {
        const userProfile = {
            userId: userId,
            intro: user_intro,
            stackList: stack.map(item => item.value),
            profileList: profile.map(item => item.value)
        };
        try {
            axios({
                method: 'post',
                url: '/user-profile',
                data: userProfile
            }).then(result => {
                Swal.fire({
                    title: "프로필이 설정되었습니다"
                }).then(() => {
                    navigate('/MyPage');
                });
            })
        } catch (err) {
            console.error(err);
        }
    }

    const deleteUserProflie = (e) => {
        e.preventDefault();
        document.querySelector('#user_profile_intro').value = "";
        setStackForm({ value: "" });
        setProfileForm({
            contestName: "",
            stack: "",
            contestPeriod: "",
            gitHub: ""
        });
        setStack([]);
        setProfile([]);
    }

    return (
        <div>
            {window.location.pathname.includes('/UserProfile') && <NavigationUser />}
            <form className="user_file_form_box">
                <div>
                    <input id="user_profile_intro" className="user_introduce"
                        maxLength={50} type="text" placeholder="자기 소개를 한 줄로 간단하게 해주세요!" />
                </div>
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
                    <button type="button" onClick={saveUserProflie}>저장</button>
                    <button type="button" onClick={deleteUserProflie}>리셋</button>
                </div>
            </form>
        </div>
    );
}
