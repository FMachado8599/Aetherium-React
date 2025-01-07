import { useText } from '../../../../context/textContext';

const TextBanner = () =>{

    const { text } = useText();

    return (
        <div className='text-banner'>
            <p>{text.headerBanner.banner1}</p>
        </div>
    )
}
export default TextBanner;