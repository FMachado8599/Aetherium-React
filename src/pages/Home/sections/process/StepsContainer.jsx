import { useText } from '../../../../context/textContext.jsx'
import icon1 from '../../../../assets/Icons/search.svg'
import icon2 from '../../../../assets/Icons/customize.svg'
import icon3 from '../../../../assets/Icons/check-list.svg'
import icon4 from '../../../../assets/Icons/truck.svg'
import image1 from '../../../../assets/images/pc_zeus1.webp'
import image2 from '../../../../assets/images/pc_zeus1.webp'
import image3 from '../../../../assets/images/pc_zeus1.webp'
import image4 from '../../../../assets/images/pc_zeus1.webp'

function StepsContainer() {

    const { text } = useText();

    const icons = [icon1,icon2,icon3,icon4]
    const image = [image1,image2,image3,image4]    

    return (
    <div className='steps-container'>
        <ol className='steps-list'>
        {text.processSteps.map((steps, index) => (
                <li className='step' key={index} style={{backgroundImage: `url('../../../../assets/images/dalle-pc-compressed.webp')`}}>
                    <img src={icons[index]} alt={`Step ${index + 1} Icon`} />
                    <h3>{steps.name}</h3>
                    <p>{steps.description}</p>
                </li>
            ))}
        </ol>
    </div>
    )
}
export default StepsContainer;