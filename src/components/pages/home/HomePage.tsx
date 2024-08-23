import Image from "next/image";
import './homepage.scss'
import NaveBar from "@/components/header/pieces/NavBar";


export default function HomePage(){
    return(
        <div className='container-home' id='home'>
            {/* div decribe */}

                <div>
                    <p className='position'>
                    Software Developer Full Stack
                    </p>
                    <h2>
                    Eleve o seu negócio com um desenvolvimento de qualidade!
                    </h2>
                    <p className="apresentation">
                    Olá, eu sou o João Victor, um desenvolvedor com especialidade em aplicações com o uso de Python,
                    React, Banco de Dados Relacionais e AWS, com cerca de 2 anos de experiência profissional no mercado financeiro, transformando ideias
                    em códigos.
                    </p>
                </div>
                
                <Image
                    src="/image_home.png"
                    width={600}
                    height={590}
                    alt="Picture Home"
                    className='image-home'
                />
        </div>
    )
}