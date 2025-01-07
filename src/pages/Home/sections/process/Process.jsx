import StepsContainer from "./StepsContainer.jsx"
import { useText } from '../../../../context/textContext.jsx'

const Process = () =>{

    const { text } = useText();
    
    return(
        <section className="process">
                <h2><span>{text.processText.headingSpan}</span> {text.processText.heading1}</h2>
                <p>{text.processText.paragraph}</p>
                <StepsContainer />
                <button>{text.processText.buttonCTA}</button>
        </section>
    )
}
export default Process;