import { useText } from '../../../context/textContext.jsx'
import icon1 from '../../../assets/Icons/shield.svg'
import icon2 from '../../../assets/Icons/truck.svg'
import icon3 from '../../../assets/Icons/headset.svg'
import icon4 from '../../../assets/Icons/tools.svg'

const Benefits = () =>{

    const { text } = useText();

    const icons = [icon1,icon2,icon3,icon4]

    return (
        <ul>
            {text.benefits.map((benefit, index) => (
                <li key={index}>
                    <img src={icons[index]} alt={`Benefit ${index + 1} Icon`} />
                    <h1>{benefit.title}</h1>
                    <p>{benefit.description}</p>
                </li>
            ))}
        </ul>
    )
}
export default Benefits;