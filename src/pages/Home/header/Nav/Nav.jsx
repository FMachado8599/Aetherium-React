import { useText } from '../../../../context/textContext.jsx'
import { Link } from 'react-router-dom';

const Nav = () =>{

    const { text } = useText();

    return (
        <nav className='nav'>
                <ul className='nav-link-list'>
                    {text.navbar.map((navLink, index) => (
                        <li className='nav-list-item' key={index}>
                            <Link to={navLink.link} className='nav-link'>{navLink.text}</Link>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}
export default Nav;