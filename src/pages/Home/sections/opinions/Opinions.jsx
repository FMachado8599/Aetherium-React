import OpinionsContainer from './OpinionsContainer.jsx';
import { useText } from '../../../../context/textContext.jsx'

const Opinions = () =>{

    const { text } = useText();

    return (
        <section>
            <h2>{text.opinionsTitle}</h2>
            <OpinionsContainer />
        </section>
    )
}
export default Opinions;