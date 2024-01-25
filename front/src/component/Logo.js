import { Link } from 'react-router-dom';
import '../css/Navigation.css';

const Logo = () => {

    return (
        <div className='logo-main'>
            <Link to='/'><div id='1' className='logo'></div></Link>
        </div >
    )
}

export default Logo;