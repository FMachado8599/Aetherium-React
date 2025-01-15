import { useText } from '../../../../context/textContext.jsx'
import icon1 from '../../../../public/assets/Icons/shield.svg'
import icon2 from '../../../../public/assets/Icons/truck.svg'
import icon3 from '../../../../public/assets/Icons/headset.svg'
import icon4 from '../../../../public/assets/Icons/tools.svg'

const Benefits = () =>{

    const { text } = useText();

    const icons = [icon1,icon2,icon3,icon4]

    return (
        <ul className='benefits-list'>
            {text.benefits.map((benefit, index) => (
                <li className='benefit' key={index}>
                    <img src={icons[index]} alt={`Benefit ${index + 1} Icon`} />
                    <h2>{benefit.title}</h2>
                    <p>{benefit.description}</p>
                </li>
            ))}
        </ul>
    )
}
export default Benefits;