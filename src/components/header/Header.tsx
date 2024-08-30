"use client"
import {useState } from "react"
import "./header.scss"
import Button from "../buttons/Button"

export default function Header() {

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handlerMenu = () => {
        setOpenMenu((prev) => !prev)
    }

    return(
        <header className={`header${openMenu ? ' active' : ''}`}>
            <div className="title-site">
                <h2>
                    <span className="icon-tag">{"</"}</span>
                    <span className="">João Martins</span>
                    <span className="icon-tag">{">"}</span>
                </h2>
            </div>

            <nav className={`nav${openMenu ? ' nav-active' : ''}`}>
                <button className="btn-mobile" onClick={handlerMenu}>
                    <span className={`hamburguer${openMenu? ' active' : ''}`}></span>
                </button>
                <ul className={`menu${openMenu? ' menu-active' : ''}`}>
                    <li>
                        {/* handle menu dinamico */}
                        <Button buttonName="Home" handleMenu={handlerMenu}/>
                    </li>
                    <li>
                        <Button buttonName="Projects" handleMenu={handlerMenu}/>
                    </li>
                    <li>
                        <Button buttonName="About" handleMenu={handlerMenu}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}