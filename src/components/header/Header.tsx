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
                        <Button buttonName="Home"/>
                    </li>
                    <li>
                        <Button buttonName="Projects"/>
                    </li>
                    <li>
                        <Button buttonName="About"/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}