import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {

  return (
    <div className ='footer'>
        <Link to="https://github.com/JozelineSu">
            <a className='d-flex justify-content-center'>My Github</a>
        </Link>
    </div>
  );
}

export default Footer;