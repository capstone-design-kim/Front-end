import { Link } from 'react-router-dom';
import './css/Navigation.css';

const Navigation = () => {

    return (
        <div className='navigation'>
            <div className='competition'><Link to='/Competition'>공모전</Link></div>
            |
            <div className='teamChating'><Link to='/TeamChating'>팀 채팅방</Link></div>
            |
            <div className='community'><Link to='/Community'>커뮤니티</Link></div>
        </div>
    )
}

export default Navigation;