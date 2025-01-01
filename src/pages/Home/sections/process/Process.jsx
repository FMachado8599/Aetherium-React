import StepsContainer from "./StepsContainer.jsx"
import { useText } from '../../../../context/textContext.jsx'

const Process = () =>{

    const { text } = useText();
    
    return(
        <section className="process">
                <h1><span>{text.processText.headingSpan}</span> {text.processText.heading1}</h1>
                <p>{text.processText.paragraph}</p>
                <StepsContainer />
                <button>{text.processText.buttonCTA}</button>
        </section>
    )
}
export default Process;