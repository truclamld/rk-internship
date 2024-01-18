import "./AccomHomeItem.scss";

export default function AccomHomeItem({image, title}) {
    return (
        <div className="accomItem">
            <img src={image} alt={title}></img>
            <h2>{title}</h2>
        </div>
    )
}