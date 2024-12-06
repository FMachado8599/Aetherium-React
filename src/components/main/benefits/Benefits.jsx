import BenefitsContainer from './BenefitsContainer.jsx';
import { useText } from '../../../context/textContext.jsx'

const Benefits = () =>{

    const { text } = useText();

    return (
        <section>
            <h2>{text.benefitsTitle}</h2>
            <BenefitsContainer />
        </section>
    )
}
export default Benefits;