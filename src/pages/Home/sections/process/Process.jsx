import StepsContainer from "./StepsContainer.jsx"
import { useText } from '../../../../context/textContext.jsx'

const Process = () =>{

    const { text } = useText();
    
    return(
        <section>
            <div>
                <h1><span>{text.processText.headingSpan}</span> {text.processText.heading1}</h1>
                <p>{text.processText.paragraph}</p>
                <StepsContainer />
                <button>{text.processText.buttonCTA}</button>
            </div>
        </section>
    )
}
export default Process;