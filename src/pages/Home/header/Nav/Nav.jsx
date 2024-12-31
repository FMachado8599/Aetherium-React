import { useText } from '../../../../context/textContext.jsx'

const Nav = () =>{

    const { text } = useText();

    return (
        <nav className='nav'>
                <ul className='nav-link-list'>
                    {text.navbar.map((navLink, index) => (
                        <li className='nav-list-item' key={index}>
                            <a className='nav-link' href="">{navLink.text}</a>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}
export default Nav;