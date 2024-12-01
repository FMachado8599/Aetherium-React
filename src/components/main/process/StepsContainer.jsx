import Steps from "../../../json/steps.json"

function StepsContainer() {
    return (
    <div>
        <ol>
        {Steps.map((steps, index) => (
                <li key={index}>
                    <h1>{steps.name}</h1>
                    <img src={steps.icon}></img>
                    <p>{steps.description}</p>
                    <img src={steps.image}></img>
                </li>
            ))}
        </ol>
    </div>
    )
}
export default StepsContainer;