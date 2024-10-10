import IconEmail from "@/components/icons/Iconemail";
import { GitHubIcon } from "@/components/icons/IconGIthub";
import { LinkedInIcon } from "@/components/icons/IconLinkedin";
import Image from "next/image";
import "./about.scss"


export default function AboutPage() {
    return(
        <div className="container-about" id='about'>
            <h2 className="title-page">About</h2>

            <div className="content-about">
            

                <div className="profile">
                    <Image 
                    className="img-profile"
                    width={300}
                    height={290}
                    alt="Profile Picture"
                    src={"/perfil.JPEG"}
                    />

                    <p>João Martins</p>

                    <div className="social-icons">
                        <a href="mailto:jvictor.n.m23@gmail.com" target="_blank">
                            <IconEmail/>
                        </a>

                        <a href="https://www.linkedin.com/in/jvnogueira23/" target="_blank">
                            <LinkedInIcon />
                        </a>

                        <a href="https://github.com/JoaoNogueira23" target="_blank">
                            <GitHubIcon />
                        </a>
                        
                        
                        
                    </div>
                </div>

                <div className="profile-description">
                    
                    <p>
                    Eu sou um deseenvolvedor Full Stack com conhecimento sólido com <span className="text-emphasis">React, Python, AWS e Banco de Dados Relacionais</span> e familiaridade
                    com tecnologias como <span className="text-emphasis">AWS (Cloud Computer), Azure</span>, e familiaridade com ferramentas de <span className="text-emphasis">LOW CODE como PowerBI e Power Automate</span>, além de ferramentas
                    de versionamento como o GIT.
                    </p>
                    <br/>
                    <p>
                    Tenho um experiência profissional no mercado financeiro, onde somei ao time de desenvolvimento de automações
                    no banco BTG Pactual por cerca de 2 anos, com destaca de web apps que desenvolvi gerando eficiência operacional e
                    mitigando, também, risco operacional. Um dos apps <span className="text-emphasis">gerou um head count por mês de eficiência (168h)</span> .
                    </p>
                </div>
            </div>
        </div>
    )
}