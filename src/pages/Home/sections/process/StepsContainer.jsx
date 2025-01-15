import { useText } from '../../../../context/textContext.jsx'
import icon1 from '../../../../assets/Icons/search.svg'
import icon2 from '../../../../assets/Icons/customize.svg'
import icon3 from '../../../../assets/Icons/check-list.svg'
import icon4 from '../../../../assets/Icons/truck.svg'

function StepsContainer() {

    const { text } = useText();

    const icons = [icon1,icon2,icon3,icon4]

    return (
        <ol className='steps-list'>
        {text.processSteps.map((steps, index) => (
                <li className='step' key={index}>
                    <div>
                        <img className='step-icon' src={icons[index]} alt={`Step ${index + 1} Icon`} />
                        <h4 className='step-title'>{steps.name}</h4>
                    </div>
                    <p>{steps.description}</p>
                </li>
            ))}
        </ol>
    )
}
export default StepsContainer;