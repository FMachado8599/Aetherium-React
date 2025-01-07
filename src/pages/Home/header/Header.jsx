import Navbar from './Nav/NavContainer.jsx';
import TextBanner from './TextBanner/TextBanner.jsx';


const Header = () =>{
    return <header className='header'>
        <TextBanner/>
        <Navbar/>
    </header>
}
export default Header;