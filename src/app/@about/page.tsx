import IconEmail from "@/components/icons/Iconemail";
import { GitHubIcon } from "@/components/icons/IconGIthub";
import { LinkedInIcon } from "@/components/icons/IconLinkedin";
import Image from "next/image";
import "./about.scss"


export default function AboutPage() {
    return(
        <div className="container-about" id='about'>
            <h2 className="title-page">Sobre</h2>

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
                        Sou um densenvolvedor com sólidos conhecimentos na linguagens de programação <span className="text-emphasis"> Python</span> e <span className="text-emphasis">JavaScript</span>, além do domínio em frameworks e bibliotecas de UI para oferecer ótimas experiências para o usuário, dentre elas estão o <span className="text-emphasis">React</span>, o
                        <span className="text-emphasis"> TypeScript</span>, o <span className="text-emphasis">NextJS</span> e o <span className="text-emphasis">Material UI</span>.
                    </p>
                    <br/>
                    <p>
                        Possuo experiência profissional com o uso de tecnologias de nuvem, especialmente com a <span className="text-emphasis">AWS</span>. Também sou familiaridade com ferramentas de Low Code, como <span className="text-emphasis">Power BI</span>, 
                        <span className="text-emphasis"> UiPath</span> e <span className="text-emphasis">Power Automate</span> e ferramentas de versionamento de projetos, como o GIT.
                    </p>
                        
                    <br/>
                    <p>
                        Tenho uma experiência profissional de cerca de 2 anos no banco BTG Pactual, onde pude contribuir com o desenvolvimento de solucões para automatizar processos para melhorar rotinas e operacões
                        do banco para multiplas áreas. Também já atuei como Freelancer no desenvolvimento de sites e sistemas web.
                    </p>
                </div>
            </div>
        </div>
    )
}