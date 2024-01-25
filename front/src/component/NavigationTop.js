import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/Navigation.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className='navigation-top'>
            <Link to='/'><div id='1' className='logo'></div></Link>
            <div id='2' className='competition_select'>
                <form method='' action=''>
                    <input type='text' placeholder='검색어를 입력하세요' />
                </form>
                <button type='button' className='search'><FontAwesomeIcon icon={faMagnifyingGlass} size='2x' /></button>
            </div>
            <div className='competition'><Link to='/Competition'>전체 공모전 목록</Link></div>

            <Link to='/MyPage'><div id='3' className='mypage'>
                <FontAwesomeIcon icon={faUser} size='2x' />
            </div></Link>
        </div >
    )
}

export default Navigation;