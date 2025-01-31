import Nav from './Nav.jsx';
import Logo from '../../../../public/assets/logos/logo-claro.svg'
import Menu from './NavMenu.jsx'
import { Link } from 'react-router-dom';
import MainPage from '../../MainPage.jsx';

const Navbar = () =>{
    return (
        <div className='navbar-functions'>
            <Link to={MainPage}><img className='logo' src={Logo} alt='Logo de Aetherium'></img></Link>
            <Nav/>
            <Menu/>
        </div>
    )
}
export default Navbar;