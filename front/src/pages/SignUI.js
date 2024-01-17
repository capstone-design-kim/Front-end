import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../css/SignUI.css';
import Logo from '../Logo.js';
import Post from '../component/Post.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faPerson, faEnvelope, faPhone, faHouse, faVenusMars, faUsers, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function MyPage() {
    const navigate = useNavigate();
    const UserInfo = {}

    // 유효성 검사를 위한 선언
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [tendency, setTendency] = useState('');

    // 오류메시지 상태저장
    const [pwMessage, setPwMessage] = useState('');
    const [nameMessage, setNameMessage] = useState('');
    const [phoneMessage, setPhoneMessage] = useState('');

    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isPhone, setIsPhone] = useState(false);

    const onLogin = e => {
        e.preventDefault();
        UserInfo['userId'] = id
        UserInfo['password'] = pw

        let check_id = document.getElementById("login_id");
        let check_pw = document.getElementById("login_pw");

        if (check_id.value.trim() === "") {
            alert("아이디를 입력해주세요");
            check_id.focus();
            return false;
        }
        if (check_pw.value.trim() === "") {
            alert("비밀번호를 입력해주세요");
            check_pw.focus();
            return false;
        }

        try {
            axios({
                method: 'post',
                url: '/user/login',
                data: UserInfo
            }).then(result => {
                if (result.status == 200) {
                    alert("로그인에 성공했습니다");
                    navigate('/')
                } else {
                    alert("아이디 / 비밀번호가 맞지 않습니다");
                    navigate('/Login')
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    const onSubmit = e => {

        let gender_input = document.querySelector("#gender");
        let tendency_input = document.querySelector("#domain-list");

        setGender(gender_input.value.trim());
        setTendency(tendency_input.value.trim());

        e.preventDefault();
        UserInfo['userId'] = id
        UserInfo['password'] = pw
        UserInfo['username'] = name
        UserInfo['email'] = email
        UserInfo['phone'] = phone
        UserInfo['address'] = address
        UserInfo['gender'] = gender
        UserInfo['tendency'] = tendency
        try {
            axios({
                method: 'post',
                url: '/user/signup',
                data: UserInfo
            }).then(result => {
                if (result.status == 200) {
                    alert("회원가입에 성공했습니다!");
                    navigate('/Login');
                }
            })
        } catch (err) {
            console.error(err);
        }
    };

    const idCheck = e => {
        e.preventDefault();
        let id = e.target.value;

        try {
            axios({
                method: 'post',
                url: '/user/idcheck',
                data: id
            }).then(result => {
                if (result.status == 200) {
                    alert("사용 가능한 아이디입니다");
                    setId(id);
                    setIsId(true);
                } else if (result.status === 409) {
                    alert("이미 사용중인 아이디 입니다.");
                    setId(false);
                } else {
                    alert("사용 불가한 아이디입니다.");
                    setId(false);
                }
            })
        } catch (err) {
            console.error(err);
        }
    }

    // 이름
    const onChangeName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 2) {
            setNameMessage('2글자 이상으로 입력해주세요.');
            setIsName(false);
        } else {
            setNameMessage('올바른 이름 형식입니다 :)');
            setIsName(true);
        }
    };

    // 비밀번호
    const onChangePassword = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const passwordCurrent = e.target.value;
        setPw(passwordCurrent);

        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
            setIsPw(false);
        } else {
            setPwMessage('안전한 비밀번호에요 : )');
            setIsPw(true);
        }
    };

    // 전화번호
    const onChangePhone = e => {
        const phoneRegex = /^[0-9]{4}$/;
        const phoneCurrent = e.target.value;
        setPhone(phoneCurrent);

        if (!phoneRegex.test(phoneCurrent)) {
            setPhoneMessage('숫자 4자리로 입력해주세요!');
            setIsPhone(false);
        } else {
            setPhoneMessage('올바른 전화번호입니다.');
            setIsPhone(true);
        }
    };

    const signup_check = e => {
        e.preventDefault();

        let idCheck = document.querySelector("#id");
        let pwCheck = document.querySelector("#pw");
        let nameCheck = document.querySelector("#name");
        const loginup = document.getElementById("login-up");
        const loginup2 = document.getElementById("login-up-2");

        if (idCheck.value.trim() === "") {
            alert("아이디를 입력해주세요");
            idCheck.focus();
            return false;
        }

        if (pwCheck.value.trim() === "") {
            alert("비밀번호를 입력해주세요");
            pwCheck.focus();
            return false;
        }

        if (nameCheck.value.trim() === "") {
            alert("사용자 이름을 입력해주세요");
            nameCheck.focus();
            return false;
        }

        if (!(idCheck.value.trim() === "") && !(pwCheck.value.trim() === "") && !(nameCheck.value.trim() === "")
            && setIsId(true) && setIsPw(true) && setIsName(true)) {

            loginup2.classList.remove("none");
            loginup.classList.remove("block");

            loginup2.classList.add("block");
            loginup.classList.add("none");
        }
    }

    const signup_check_2 = e => {
        e.preventDefault();

        let emailCheck = document.querySelector("#email");
        let emailSecondCheck = document.querySelector("#domain-txt");
        let phoneFrist = document.querySelector("#domain-list");
        let phoneSecondCheck = document.querySelector("#phone_second");
        let phoneThirdCheck = document.querySelector("#phone_third");
        let houseCheck = document.querySelector("#house");
        let houseSecondCheck = document.querySelector("#house_second");
        let houseThirdCheck = document.querySelector("#house_third");
        const loginup2 = document.getElementById("login-up-2");
        const loginup3 = document.getElementById("login-up-3");

        if (emailCheck.value.trim() === "") {
            alert("이메일을 입력해주세요");
            emailCheck.focus();
            return false;
        }

        if (emailSecondCheck.value.trim() === "") {
            alert("이메일 주소를 입력해주세요");
            emailSecondCheck.focus();
            return false;
        }

        if (phoneSecondCheck.value.trim() === "") {
            alert("휴대폰 중간 번호를 입력해주세요");
            phoneSecondCheck.focus();
            return false;
        }

        if (phoneThirdCheck.value.trim() === "") {
            alert("휴대폰 뒷 번호를 입력해주세요");
            phoneThirdCheck.focus();
            return false;
        }

        if (houseCheck.value.trim() === "" || houseSecondCheck.value.trim === "") {
            alert("우편번호 찾기를 해주세요");
            return false;
        }

        if (houseThirdCheck.value.trim() === "") {
            alert("상세 주소를 입력해주세요");
            houseThirdCheck.focus();
            return false;
        }

        if (!(emailCheck.value.trim() === "") && !(emailSecondCheck.value.trim() === "") && !(phoneSecondCheck.value.trim() === "")
            && !(phoneThirdCheck.value.trim() === "") && !(houseCheck.value.trim() === "") && !(houseThirdCheck.value.trim() === "")) {

            setEmail(emailCheck.value.trim() + '@' + emailSecondCheck.value.trim());
            setPhone(phoneFrist.value.trim() + '-' + phoneSecondCheck.value.trim() + '-' + phoneThirdCheck.value.trim());
            setName(houseCheck.value.trim() + '-' + houseSecondCheck.value.trim() + houseThirdCheck.value.trim());

            loginup3.classList.remove("none");
            loginup2.classList.remove("block");

            loginup3.classList.add("block");
            loginup2.classList.add("none");
        }
    }


    useEffect(() => {
        const domainListEl = document.querySelector('#domain-list');
        const domainInputEl = document.querySelector('#domain-txt');

        if (domainListEl && domainInputEl) {
            domainListEl.addEventListener('change', (event) => {
                if (event.target.value !== "type") {
                    domainInputEl.value = event.target.value;
                    domainInputEl.disabled = true;
                } else {
                    domainInputEl.value = "";
                    domainInputEl.disabled = false;
                }
            });
        }

        const signup = document.getElementById("sign-up");
        const signup1 = document.getElementById("sign-up-1");
        const signin = document.getElementById("sign-in");
        const signin2 = document.getElementById("sign-in-2");
        const signin3 = document.getElementById("sign-in-3");
        const loginin = document.getElementById("login-in");
        const loginin2 = document.getElementById("login-in-2");
        const loginup = document.getElementById("login-up");
        const loginup2 = document.getElementById("login-up-2");
        const loginup3 = document.getElementById("login-up-3");

        signup.addEventListener("click", () => {
            loginin.classList.remove("block");
            loginup.classList.remove("none");

            loginin.classList.add("none");
            loginup.classList.add("block");
        });

        signup1.addEventListener("click", () => {
            loginup2.classList.remove("block");
            loginup.classList.remove("none");

            loginup2.classList.add("none");
            loginup.classList.add("block");
        });

        signin.addEventListener("click", () => {
            loginin.classList.remove("none");
            loginup.classList.remove("block");

            loginin.classList.add("block");
            loginup.classList.add("none");
            loginup2.classList.add("none");
        });

        signin2.addEventListener("click", () => {
            loginin.classList.remove("none");
            loginup2.classList.remove("block");

            loginin.classList.add("block");
            loginup2.classList.add("none");
        });

        signin3.addEventListener("click", () => {
            loginin.classList.remove("none");
            loginup3.classList.remove("block");

            loginin.classList.add("block");
            loginup3.classList.add("none");
        });

        loginin2.addEventListener("click", () => {
            loginup2.classList.remove("none");
            loginup3.classList.remove("block");

            loginup2.classList.add("block");
            loginup3.classList.add("none");
        });
    }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 함

    return (
        <div>
            {window.location.pathname.includes('/SignUI') && <Logo />}
            <div class="login">
                <div class="login__content">
                    <div class="login__img">
                        <img src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" alt="user login" />
                    </div>
                    <div class="login__forms">
                        {/* 로그인 폼 */}
                        <form class="login__register" id="login-in">
                            <h1 class="login__title">로그인</h1>
                            <div class="login__box">
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="UserId" class="login__input" id="login_id" />
                            </div>
                            <div class="login__box">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="text" placeholder="Password" class="login__input" id="login_pw" />
                            </div>
                            <a href="#" class="login__forgot">Forgot Password? </a>

                            <a class="login__button" onClick={onLogin} id="signup_next">로그인</a>

                            <div>
                                <span class="login__account login__account--account">아이디가 없으신가요?</span>
                                <span class="login__signin login__signin--signup" id="sign-up">회원가입</span>
                            </div>
                        </form>

                        {/* 회원가입 폼 */}
                        <form class="login__create none" id="login-up" onSubmit={onSubmit}>
                            <h1 class="login__title">회원가입</h1>
                            <div class="id_box">
                                <FontAwesomeIcon icon={faUser} />
                                <input type="text" placeholder="UserId" class="id__input" id="id" />
                                <span className="id_checkbox" onClick={idCheck}>중복확인</span>
                            </div>

                            <div class="login__box">
                                <FontAwesomeIcon icon={faLock} />
                                <input type="password" maxLength={25} placeholder="Password" class="login__input" id="pw" onChange={onChangePassword} />
                                <br />
                                {pw.length > 0 && (<span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
                            </div>

                            <div class="login__box">
                                <FontAwesomeIcon icon={faPerson} />
                                <input type="text" maxLength={10} placeholder="UserName" class="login__input" onChange={onChangeName} id="name" />
                                <br />
                                {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
                            </div>

                            <span class="login__button" id="signup_next" onClick={signup_check}>다음</span>

                            <div>
                                <span class="login__account login__account--account">이미 회원이신가요?</span>
                                <span class="login__signup login__signup--signup" id="sign-in">로그인</span>
                            </div>
                        </form>

                        {/* 회원가입 2번째 폼 */}
                        <form class="login__create none" id="login-up-2" onSubmit={onSubmit}>
                            <div className="title__box">
                                <FontAwesomeIcon className="before" icon={faArrowLeft} size="2x" id="sign-up-1" />
                                <h1 class="login__title__bofore">회원가입</h1>
                            </div>

                            <div class="login__box">
                                <div id="email_div">
                                    <FontAwesomeIcon className="email" icon={faEnvelope} />
                                    <input type="text" placeholder="Email" class="login__input" id="email" /><p className="emailAnd">@</p>
                                </div>
                                <div>
                                    <input class="box" id="domain-txt" type="text" placeholder="직접 입력" />
                                    <select class="box" id="domain-list">
                                        <option value="type">직접 입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="hanmail.net">hanmail.net</option>
                                        <option value="nate.com">nate.com</option>
                                        <option value="kakao.com">kakao.com</option>
                                    </select>
                                </div>
                            </div>

                            <div class="login__box">
                                <div id="phone_box">
                                    <FontAwesomeIcon icon={faPhone} className="email" />
                                    <select class="box" id="domain-list">
                                        <option value="010" selected>010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                    </select>
                                    <p className="phone_between">-</p>
                                    <input type="text" placeholder="4자리"
                                        maxLength={4} class="login__input" id="phone_second" onChange={onChangePhone} />
                                    <p className="phone_between">-</p>
                                    <input type="text" placeholder="4자리"
                                        maxLength={4} class="login__input" id="phone_third" onChange={onChangePhone} />
                                </div>
                                <br />
                                {phone.length > 0 && (<span className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</span>)}
                            </div>

                            <div class="post__box">
                                <FontAwesomeIcon icon={faHouse} />
                                <Post />
                            </div>

                            <span class="login__button" id="signup_next" onClick={signup_check_2}>다음</span>

                            <div>
                                <span class="login__account login__account--account">이미 회원이신가요?</span>
                                <span class="login__signup login__signup--signup" id="sign-in-2">로그인</span>
                            </div>
                        </form>

                        {/* 회원가입 3번째 폼 */}
                        <form class="login__create none" id="login-up-3" onSubmit={onSubmit}>
                            <div className="title__box">
                                <FontAwesomeIcon className="before" icon={faArrowLeft} size="2x" id="login-in-2" />
                                <h1 class="login__title__bofore">회원가입</h1>
                            </div>

                            <div class="login__box">
                                <div>
                                    <FontAwesomeIcon icon={faUsers} />
                                    <select class="box" id="domain-list">
                                        <option value="ISTJ" selected>ISTJ (현실주의자)</option>
                                        <option value="ISTP">ISTP (장인)</option>
                                        <option value="INFJ">INFJ (옹호자)</option>
                                        <option value="INTJ">INTJ (전략가)</option>
                                        <option value="ISFJ">ISFJ (수호자)</option>
                                        <option value="ISFP">ISFP (모험가)</option>
                                        <option value="INFP">INFP (중재자)</option>
                                        <option value="INTP">INTP (논리술사)</option>
                                        <option value="ESTJ">ESTJ (경영자)</option>
                                        <option value="ESFP">ESFP (연예인)</option>
                                        <option value="ENFP">ENFP (활동가)</option>
                                        <option value="ENTP">ENTP (변론가)</option>
                                        <option value="ESFJ">ESFJ (집정관)</option>
                                        <option value="ESTP">ESTP (사업가)</option>
                                        <option value="ENFJ">ENFJ (선도자)</option>
                                        <option value="ENTJ">ENTJ (통솔자)</option>
                                    </select>
                                </div>
                            </div>

                            <div class="login__box">
                                <div>
                                    <FontAwesomeIcon icon={faVenusMars} />
                                    <input type="radio" id="gender" name="gender" value="남자" class="gender_input" checked />남자
                                    <input type="radio" id="gender" name="gender" value="여자" class="gender_input" />여자
                                </div>
                            </div>

                            <a onClick={onSubmit} id="signup_next" class="login__button">회원가입</a>

                            <div>
                                <span class="login__account login__account--account">이미 회원이신가요?</span>
                                <span class="login__signup login__signup--signup" id="sign-in-3">로그인</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}