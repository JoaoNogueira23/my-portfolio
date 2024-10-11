import './homepage.scss'


export default function HomePage(){

    return(
        <div className='container-home' id='home'>
            {/* div decribe */}

                <div className="content">
                    <p className='position'>
                    Densenvolvedor <span className="text-animate">Full Stack</span>
                    </p>
                    <h2>
                    Eleve o seu negócio com um desenvolvimento de qualidade!
                    </h2>
                    <p className="apresentation">
                    Eu me chamo João Victor,  um desenvolvedor Full Stack com experiência no desenvolvimento de sistemas que melhorem rotinas
                    operacionais e agregam valor ao negócio.
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