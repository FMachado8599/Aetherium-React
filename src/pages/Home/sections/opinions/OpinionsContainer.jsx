import { useText } from '../../../../context/textContext.jsx'
import image1 from '../../../../assets/images/pc_zeus1.webp'
import image2 from '../../../../assets/images/pc_zeus1.webp'
import image3 from '../../../../assets/images/pc_zeus1.webp'
import image4 from '../../../../assets/images/pc_zeus1.webp'

const Opinions = () =>{

    const { text } = useText();

    const image = [image1,image2,image3,image4] 

    return (
        <ul>
            {text.opinions.map((opinion, index) => (
                <li key={index}>
                    <img src={image[index]} alt={`Avatar ${index + 1}`} />
                    <h1>{opinion.name}</h1>
                    <p>{opinion.role}</p>
                    <p>{opinion.opinion}</p>
                    <p>{opinion.rating}</p>
                </li>
            ))}
        </ul>
    )
}
export default Opinions;