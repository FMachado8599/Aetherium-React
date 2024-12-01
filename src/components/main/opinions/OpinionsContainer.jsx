import OpinionsText from "../../../json/opinions.json";

const Opinions = () =>{
    return (
        <ul>
            {OpinionsText.opinions.map((opinions, index) => (
                <li key={index}>
                    <img src={opinions.avatar}></img>
                    <h1>{opinions.name}</h1>
                    <p>{opinions.role}</p>
                    <p>{opinions.quote}</p>
                    <p>{opinions.rating}</p>
                </li>
            ))}
        </ul>
    )
}
export default Opinions;