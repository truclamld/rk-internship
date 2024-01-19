import "./ServiceLayout.scss";

export default function ServiceLayout({title, subtitle, image, direction}) {
    return (
        <div className="srvLayout" style={{flexDirection: direction}}>
            <div className="srvImage" style={{backgroundImage: 'url(' +  image + ')'}}>
            </div>
            <div className="srvText">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}