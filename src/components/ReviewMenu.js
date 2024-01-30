import StarIcon from "./svg/StarIcon";
import "./ReviewMenu.scss";

export default function ReviewMenu({Date, Rating, Author, ReviewText}) {
    const rate = [];
    
    for (let i = 0; i < Rating; i++)
    {
        rate.push(<StarIcon key={i} />);
    }
    return (
        <div className="reviewMenu">
            <div className="datenstar">
                <h4>{Date}</h4>
                <div className="star">
                    {rate}
                </div>
            </div>
            <p>{ReviewText}</p>
            <h4 className="authorName">{Author}</h4>
        </div>
    )
}