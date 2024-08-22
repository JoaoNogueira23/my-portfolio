import IconEmail from "@/components/icons/Iconemail";
import { GitHubIcon } from "@/components/icons/IconGIthub";
import { LinkedInIcon } from "@/components/icons/IconLinkedin";
import Image from "next/image";
import "./about.scss"


export default function AboutPage() {
    return(
        <>
            <div className="container-about">
                <h2 className="title-page">About</h2>

                <div className="content-about">
                

                    <div className="profile">
                        <Image 
                        className="img-profile"
                        width={300}
                        height={290}
                        alt="Profile Picture"
                        src={"/profile.png"}
                        />

                        <p>João Martins</p>

                        <div className="social-icons">
                            <IconEmail/>
                            <LinkedInIcon />
                            <GitHubIcon />
                        </div>
                    </div>

                    <div className="profile-description">
                        
                        <p>
                        Eu sou um deseenvolvedor Full Stack <br/>
                        Tenho experiência no desenvolvimento de automatizações e com o desenvolvimento Front-End. Já trabalhei com a AWS, PowerBI e com a criação de web apps.
                        </p>
                    </div>
                </div>
            </div>
        </>
        
    )
}