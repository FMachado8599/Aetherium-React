import Nav from './Nav.jsx';
import Logo from '../../assets/logos/logo-claro.svg'
import Menu from './Menu.jsx'

const Navbar = () =>{
    return (
        <div>
            <img src={Logo} alt='Logo de Aetherium'></img>
            <Nav/>
            <Menu/>
        </div>
    )
}
export default Navbar;