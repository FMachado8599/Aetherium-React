import BenefitsContainer from './BenefitsContainer.jsx';
import { useText } from '../../../../context/textContext.jsx'

const Benefits = () =>{

    const { text } = useText();

    return (
        <section className='benefits'>
            <h2 className='benefits-title'>{text.benefitsTitle + " "}<span className=''>{text.benefitsTitleSpan}</span></h2>
            <BenefitsContainer />
        </section>
    )
}
export default Benefits;