import "./Accommodation.scss";
import "@fontsource/raleway";

export default function Accommodation({title, desc, image}) {
    return (
        <div className="accommodation">
            <div className="image" style={{backgroundImage: 'url(' +  image + ')'}}>
            </div>
            <div className="accomTextLid" />
            <div className="accomText">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}