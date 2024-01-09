import "./App.css"
import headerImg from './images/header.jpg'

function Header({title})
{
    return (
        <div className="App header">
            <img className="headerImg" src={headerImg} alt="Resort"></img>
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default Header;