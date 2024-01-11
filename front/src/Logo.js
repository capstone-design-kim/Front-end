import { Link } from 'react-router-dom';
import './css/Navigation.css';

const Navigation = () => {

    return (
        <div className='logo-main'>
            <Link to='/'><div id='1' className='logo'></div></Link>
        </div >
    )
}

export default Navigation;