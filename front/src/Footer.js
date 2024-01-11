import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './css/Footer.css';

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div className='footer'>
            <div className=''>하단바</div>
        </div>
    )
}

export default Navigation;