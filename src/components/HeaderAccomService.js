import "./HeaderAccomService.scss";
import "@fontsource/mulish";

export default function HeaderAccomService({ title, subtitle, image }) {
    return (
        <div className="accomheader" style={{backgroundImage: 'url(' +  image + ')'}}>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
        </div>
    );
}