import { useText } from '../../context/textContext.jsx'

const TextBanner = () =>{

    const { text } = useText();

    return (
        <p>{text.headerBanner.banner1}</p>
    )
}
export default TextBanner;