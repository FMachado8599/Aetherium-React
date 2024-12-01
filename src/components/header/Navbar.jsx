import Nav from './Nav.jsx';
import Cart from './Cart.jsx';
import Logo from '../../assets/logos/logo-claro.svg'

const Navbar = () =>{
    return <div>
        <img src={Logo} alt='Logo de Aetherium'></img>
        <Nav/>
        <Cart/>
    </div>
}
export default Navbar;