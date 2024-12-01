import BenefitsText from "../../../json/benefits.json";
import BenefitsContainer from './BenefitsContainer.jsx';

const Benefits = () =>{
    return (
        <section>
            <h2>{BenefitsText.benefitsTitle}</h2>
            <BenefitsContainer/>
        </section>
    )
}
export default Benefits;