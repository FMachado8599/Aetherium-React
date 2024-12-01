import OpinionsText from "../../../json/opinions.json";
import OpinionsContainer from './OpinionsContainer.jsx';

const Opinions = () =>{
    return (
        <section>
            <h2>{OpinionsText.opinionsTitle}</h2>
            <OpinionsContainer/>
        </section>
    )
}
export default Opinions;