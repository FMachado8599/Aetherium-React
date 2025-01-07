import Nav from './Nav.jsx';
import Logo from '../../../../assets/logos/logo-claro.svg'
import Menu from './NavMenu.jsx'

const Navbar = () =>{
    return (
        <div className='navbar-functions'>
            <img className='logo' src={Logo} alt='Logo de Aetherium'></img>
            <Nav/>
            <Menu/>
        </div>
    )
}
export default Navbar;