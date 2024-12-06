import { useText } from '../../context/textContext.jsx'

const Hero = () =>{

    const { text } = useText();

    return (
        <section>
            {text.heroText.map((text, index) => (
                <div key={index}>
                    <h1>{text.heading1} <span>{text.headingSpan}</span></h1>
                    <h3>{text.heading3}</h3>
                    <button>{text.buttonCTA}</button>
                </div>
            ))}
        </section>
    )
}
export default Hero;