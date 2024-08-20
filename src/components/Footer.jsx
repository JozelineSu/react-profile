import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {

  return (
    <footer>
        <Link to="https://github.com/JozelineSu">
            <a className='d-flex justify-content-center'>My Github</a>
        </Link>
    </footer>
  );
}

export default Footer;