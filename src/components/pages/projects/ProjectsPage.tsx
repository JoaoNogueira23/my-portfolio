import Image from 'next/image'
import './projects.scss'

export default function ProjectsPage(){
    return(
        <div className="container-projects">
            <div className="title-section">
                <h2>Projects</h2>
            </div>

            <div className="content-projects">
                <div className="card-project">
                    <Image
                    src={'/project-sotware-educacional.jpg'}
                    width={300}
                    height={200}
                    className='img-project'
                    alt='Imagem de descrição do projeto'
                    />

                    <h3 className='title-project'>
                        Software Educacional de Física
                    </h3>

                    <div className="describe-project">
                        Um software que torna visível o entendimento do fenômeno <br/>
                        de transferência de carga da eletrodinâmica.
                    </div>

                </div>
                <div className="card-project">
                    <Image
                    src={'/project-sotware-educacional.jpg'}
                    width={300}
                    height={200}
                    className='img-project'
                    alt='Imagem de descrição do projeto'
                    />

                    <h3 className='title-section'>
                        Software Educacional de Física
                    </h3>

                    <div className="describe-project">
                        Um software que torna visível o entendimento do fenômeno <br/>
                        de transferência de carga da eletrodinâmica.
                    </div>
                </div>
                <div className="card-project">
                    <Image
                    src={'/project-sotware-educacional.jpg'}
                    width={300}
                    height={200}
                    className='img-project'
                    alt='Imagem de descrição do projeto'
                    />

                    <h3>
                        Software Educacional de Física
                    </h3>

                    <div className="describe-project">
                        Um software que torna visível o entendimento do fenômeno <br/>
                        de transferência de carga da eletrodinâmica.
                    </div>
                </div>
            </div>
        </div>
    )
}