import "./AccomHome.scss";
import AccomHomeItem from "./AccomHomeItem";


export default function AccomHome({title, subtitle, images, itemSet}) {

    const items = itemSet.map((item) => {return (<AccomHomeItem image={item.Img} title={item.Name} />)})

    return (
        <div className="accom" style={{backgroundImage: 'url(' +  images + ')'}}>
            {/* <img src={images} alt={title}></img> */}
            <div className="intro">
                <h1>{title}</h1>
                <div className="split"></div>
                <h4>{subtitle}</h4>
            </div>
            <div className="menu">
                {items}
            </div>
        </div>
    )
}