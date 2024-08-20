import { useLocation } from 'react-router-dom';
import initials from '../images/initials-js.png';

function NavTabs() {
  return (
  <nav class="navbar">
    <img src={initials} alt="JS" width="56" height="50"/>
  </nav>
  );
}

export default NavTabs;