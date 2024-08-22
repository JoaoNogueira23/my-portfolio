import "./header.scss"
import NaveBar from "./pieces/NavBar"

export default function Header() {
    return(
        <header>
            <div className="title-site">
                <h2>
                    <span className="icon-tag">{"</"}</span>
                    <span className="">João Martins</span>
                    <span className="icon-tag">{">"}</span>
                </h2>
            </div>

            <NaveBar />
        </header>
    )
}