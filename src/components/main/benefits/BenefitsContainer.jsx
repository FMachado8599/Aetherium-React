import BenefitsText from "../../../json/benefits.json";

const Benefits = () =>{
    return (
        <ul>
            {BenefitsText.benefits.map((benefit, index) => (
                <li key={index}>
                    <img src={benefit.icon}></img>
                    <h1>{benefit.title}</h1>
                    <p>{benefit.description}</p>
                </li>
            ))}
        </ul>
    )
}
export default Benefits;