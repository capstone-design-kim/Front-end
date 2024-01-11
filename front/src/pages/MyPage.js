import React, { useEffect } from "react";
import '../css/MyPage.css';
import Logo from '../Logo.js';

export default function MyPage() {

    useEffect(() => {
        const signup = document.getElementById("sign-up");
        const signin = document.getElementById("sign-in");
        const loginin = document.getElementById("login-in");
        const loginup = document.getElementById("login-up");

        signup.addEventListener("click", () => {
            loginin.classList.remove("block");
            loginup.classList.remove("none");

            loginin.classList.add("none");
            loginup.classList.add("block");
        });

        signin.addEventListener("click", () => {
            loginin.classList.remove("none");
            loginup.classList.remove("block");

            loginin.classList.add("block");
            loginup.classList.add("none");
        });
    }, []); // useEffect의 두 번째 매개변수로 빈 배열을 전달하여 한 번만 실행되도록 함

    return (
        <div>
            {window.location.pathname.includes('/MyPage') && <Logo />}
            <div class="login">
                <div class="login__content">
                    <div class="login__img">
                        <img src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg" alt="user login" />
                    </div>
                    <div class="login__forms">
                        {/* 로그인 폼 */}
                        <form action="" class="login__register" id="login-in">
                            <h1 class="login__title">로그인</h1>
                            <div class="login__box">
                                <i class='bx bx-user login__icon'></i>
                                <input type="text" placeholder="Username" class="login__input" />
                            </div>
                            <div class="login__box">
                                <i class='bx bx-lock login__icon'></i>
                                <input type="text" placeholder="Password" class="login__input" />
                            </div>
                            <a href="#" class="login__forgot">Forgot Password? </a>

                            <a href="#" class="login__button">로그인</a>

                            <div>
                                <span class="login__account login__account--account">아이디가 없으신가요?</span>
                                <span class="login__signin login__signin--signup" id="sign-up">회원가입</span>
                            </div>
                        </form>

                        {/* 회원가입 폼 */}
                        <form action="" class="login__create none" id="login-up">
                            <h1 class="login__title">회원가입</h1>
                            <div class="login__box">
                                <i class='bx bx-user login__icon'></i>
                                <input type="text" placeholder="Username" class="login__input" />
                            </div>

                            <div class="login__box">
                                <i class='bx bx-at login__icon'></i>
                                <input type="text" placeholder="Email" class="login__input" />
                            </div>

                            <div class="login__box">
                                <i class='bx bx-lock login__icon'></i>
                                <input type="text" placeholder="Password" class="login__input" />
                            </div>

                            <a href="#" class="login__button">회원가입</a>

                            <div>
                                <span class="login__account login__account--account">이미 회원이신가요?</span>
                                <span class="login__signup login__signup--signup" id="sign-in">로그인</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
