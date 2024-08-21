"use client"
import Button from "@/components/buttons/Button"
import "./navbar.scss"

export default function NaveBar() {
    return(
        <nav className="nav-bar">
            <Button 
            buttonName="About"
            />

            <Button 
            buttonName="Skills"
            />
            <Button 
            buttonName="Projects"
            />
            <Button 
            buttonName="Contact"
            />
        </nav>
    )
    
}