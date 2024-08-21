import "./header.scss"

export default function Header() {
    return(
        <header>
            <div className="title-site">
                <span>{"</"}</span>
                <span>João Martins</span>
                <span>{">"}</span>
            </div>

            <nav className="nav-bar">
                <button>About</button>
                <button>Skills</button>
                <button>Projects</button>
                <button>Contact</button>
            </nav>
        </header>
    )
}