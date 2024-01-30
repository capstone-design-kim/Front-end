import NavigationUser from '../component/NavigationUser.js';
import Post from '../component/Post.js';
import '../css/UserModify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faPerson, faEnvelope, faPhone, faHouse, faVenusMars, faUsers, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function UserModify() {
    return (
        <div>
            {window.location.pathname.includes('/UserModify') && <NavigationUser />}
            <div className='UserModify_Main'>
                <div>회원 정보 수정</div>
                <form className='UserModify_Form'>
                    <div className='UserModify_Form_dbox'>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faUser} />
                            <div>아이디</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faLock} />
                            <div>비밀번호</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faPerson} />
                            <div>이름</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <div>이메일</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faPhone} />
                            <div>전화번호</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faHouse} />
                            <div>거주지</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faVenusMars} />
                            <div>성별</div>
                        </div>
                        <div className='UserModify_Form_Main'>
                            <FontAwesomeIcon icon={faUsers} />
                            <div>성향</div>
                        </div>
                    </div>
                    <div className='UserModify_Form_dbox'>
                        <input className='UserModify_Form_id' />
                        <input className='UserModify_Form_pw' />
                        <input className='UserModify_Form_name' />
                        <input className='UserModify_Form_email' />
                        <input className='UserModify_Form_phone' />
                        <Post className='UserModify_Form_home' />
                        <input className='UserModify_Form_gender' />
                        <input className='UserModify_Form_list' />
                    </div>
                </form>
                <div>
                    <div>저장</div>
                    <div>리셋</div>
                </div>
            </div>
        </div>
    )
}