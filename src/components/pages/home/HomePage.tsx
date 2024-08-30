import Image from "next/image";
import './homepage.scss'


export default function HomePage(){
    return(
        <div className='container-home' id='home'>
            {/* div decribe */}

                <div className="content">
                    <p className='position'>
                    Software Developer Full Stack
                    </p>
                    <h2>
                    Eleve o seu negócio com um desenvolvimento de qualidade!
                    </h2>
                    <p className="apresentation">
                    Eu me chamo João Victor, um desenvolvedor com especialidade no desenvolvimento de web apps e automações de rotinas operacionais.
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