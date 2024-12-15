import { useText } from '../../../context/textContext';

const TextBanner = () =>{

    const { text } = useText();

    return (
        <p>{text.headerBanner.banner1}</p>
    )
}
export default TextBanner;