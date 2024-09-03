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
                    <div className="links">
                        <a className="button-contact" href="mailto:jvictor.n.m23@gmail.com" target="_blank">
                            Contate-me
                        </a>
                        <a download href='./files/cv_pt.pdf' className='button-contact'>
                            Download CV
                        </a>
                    </div>
                    
                </div>
        </div>
    )
}