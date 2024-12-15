import { useText } from '../../../context/textContext.jsx'

const Nav = () =>{

    const { text } = useText();

    return (
        <div>
                <ul>
                    {text.navbar.map((navLink, index) => (
                        <li key={index}>
                            <a href="">{navLink.text}</a>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default Nav;