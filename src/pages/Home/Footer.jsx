import { useText } from '../../context/textContext.jsx'

const Footer = () =>{

    const { text } = useText();

    return (
        <footer>
            <div>
                <div>
                    <h3><a href="">{text.companyInfo.name}</a></h3>
                    <p>{text.companyInfo.decription}</p>
                </div>
                <div>
                    <h3>{text.quickLinks.title}</h3>
                    <ul>
                        {text.quickLinks.links.map((link, index) => (
                            <li key={index}>
                                <a href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>{text.legal.title}</h3>
                    <ul>
                        {text.legal.links.map((link, index) => (
                            <li key={index}>
                                <a href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>{text.socialMedia.title}</h3>
                    <ul>
                        {text.socialMedia.platforms.map((platform, index) => (
                            <li key={index}>
                                <a href={platform.link}><img src={platform.url} alt={platform.name}/></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <p></p>
            </div>
        </footer>
    )
}
export default Footer;