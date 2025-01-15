import { useText } from '../../context/textContext.jsx'
import logo from '../../assets/logos/logo-color.svg'
import { Linkedin } from 'lucide-react';
import { Link } from 'lucide-react';

const Footer = () =>{

    const { text } = useText();

    return (
        <footer>
            <div className='company'>
                <div className='company-info'>
                    <img src={logo} alt="Logo de Aetherium" />         
                    <h3><a href="">{text.companyInfo.name}</a></h3>
                </div>
                <div className='links-section'>
                    <h4>{text.quickLinks.title}</h4>
                    <ul>
                        {text.quickLinks.links.map((link, index) => (
                            <li key={index}>
                                <a href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='links-section'>
                    <h4>{text.legal.title}</h4>
                    <ul>
                        {text.legal.links.map((link, index) => (
                            <li key={index}>
                                <a href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='links-section'>
                    <h4>{text.socialMedia.title}</h4>
                    <ul>
                        {text.socialMedia.platforms.map((platform, index) => (
                            <li key={index}>
                                <a href={platform.link}><img className='socials-link' src={platform.url} alt={platform.name}/></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='footer-devider'></div>
            <div className='rights-info'>
                <div className='designer-links'>
                    <a href="https://www.linkedin.com/in/facundo-machado-b1554825a/" target='blank'><Linkedin className='designer-social-link'/></a>
                    <a href="https://fmachado.site" target='blank'><Link className='designer-social-link'/></a>
                    <h3>Designed by FMachado</h3>
                </div>
                <p>{text.copyright}</p>
            </div>
        </footer>
    )
}
export default Footer;