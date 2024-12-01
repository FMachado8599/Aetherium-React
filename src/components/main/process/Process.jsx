import ProcessText from "../../../json/processText.json"
import StepsContainer from "./StepsContainer.jsx"

const Process = () =>{
    return(
        <div>
            {ProcessText.map((ProcessText, index) => (
                <div key={index}>
                    <h1><span>{ProcessText.headingSpan}</span> {ProcessText.heading1}</h1>
                    <p>{ProcessText.paragraph}</p>
                    <StepsContainer/>
                    <button>{ProcessText.buttonCTA}</button>
                </div>
            ))}
        </div>
    )
}
export default Process;