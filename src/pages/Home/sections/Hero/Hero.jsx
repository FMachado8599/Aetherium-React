import { useText } from '../../../../context/textContext.jsx'

const Hero = () =>{

    const { text } = useText();

    return (
        <section className='hero'>
            {text.heroText.map((text, index) => (
                <div className='hero-text' key={index}>
                    <h1>{text.heading1} <span>{text.headingSpan}</span></h1>
                    <p>{text.heading3}</p>
                    <button className='hero-cta-button'>{text.buttonCTA}</button>
                </div>
            ))}
        </section>
    )
}
export default Hero;