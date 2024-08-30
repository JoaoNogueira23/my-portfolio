"use client"
import Button from "@/components/buttons/Button"
import "./styles/navbar.scss"

export default function NavBar() {
    return(
        <nav className="nav-bar">
            <Button 
            buttonName="Home"
            />
            <Button 
            buttonName="About"
            />
            <Button 
            buttonName="Projects"
            />
        </nav>
    )
    
}