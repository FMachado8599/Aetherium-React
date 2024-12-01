import heroText from "../../json/heroText.json"

const Hero = () =>{
    return (
        <div>
            {heroText.map((heroText, index) => (
                <div key={index}>
                    <h1>{heroText.heading1} <span>{heroText.headingSpan}</span></h1>
                    <h3>{heroText.heading3}</h3>
                    <button>{heroText.buttonCTA}</button>
                </div>
            ))}
        </div>
    )
}
export default Hero;