import { useText } from '../../../context/textContext.jsx'

const LanguageSelector = () => {

    const { language, setLanguage } = useText();

    function toggleLanguage() {
        setLanguage(language === 'es' ? 'en' : 'es')
    }

    return (
        <label className='switch'>
            <span>EN</span>
            <input
                type="checkbox"
                checked={language === 'es'}
                onChange={toggleLanguage}  
            />
            <span>ES</span>
        </label>
    )
}

export default LanguageSelector
