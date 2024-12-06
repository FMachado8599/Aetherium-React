import { useText } from '../../../context/textContext.jsx'
import icon1 from '../../../assets/Icons/search.svg'
import icon2 from '../../../assets/Icons/customize.svg'
import icon3 from '../../../assets/Icons/check-list.svg'
import icon4 from '../../../assets/Icons/truck.svg'
import image1 from '../../../assets/images/pc_zeus1.webp'
import image2 from '../../../assets/images/pc_zeus1.webp'
import image3 from '../../../assets/images/pc_zeus1.webp'
import image4 from '../../../assets/images/pc_zeus1.webp'

function StepsContainer() {

    const { text } = useText();

    const icons = [icon1,icon2,icon3,icon4]
    const image = [image1,image2,image3,image4]    

    return (
    <div>
        <ol>
        {text.processSteps.map((steps, index) => (
                <li key={index}>
                    <h1>{steps.name}</h1>
                    <img src={icons[index]} alt={`Step ${index + 1} Icon`} />
                    <p>{steps.description}</p>
                    <img src={image[index]} alt={`Step ${index + 1} Image`} />
                </li>
            ))}
        </ol>
    </div>
    )
}
export default StepsContainer;