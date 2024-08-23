import Image from 'next/image'
import './projects.scss'
import CardMain from './pieces/cardMain'

export default function ProjectsPage(){
    return(
        <div className="container-projects">
            <div className="title-section">
                <h2>Projects</h2>
            </div>

            <div className="content-projects">
                <CardMain 
                title='Sotware Educacional'
                describe='Um software que torna visível o entendimento do fenômeno de transferência de carga da eletrodinâmica.'
                describeDetail='Sotware criando com o Python como projeto final
                        de uma disciplina de Física durante a minha graduação.
                        Projeto interdisciplinar que eu idealizei com o intuito
                        de entregar o projeto final e estudar programação ao mesmo tempo.'
                imagePath='/project-sotware-educacional.jpg'
                languages={['Python']}
                linkApplication={'https://github.com/JoaoNogueira23/ProjectsPython/tree/main/SimulationOfPhisical'}
                />
                <CardMain 
                title='Web Scraping'
                describe='Extração de notícias sobre futebol'
                describeDetail='Projeto criado com o intuito de treinar a utilização de recursos da AWS, além da utilização de algoritimos de RPA.'
                imagePath='/project-sotware-educacional.jpg'
                languages={['Python', 'AWS', 'MySQL']}
                linkApplication={'https://github.com/JoaoNogueira23/news-scraping'}
                />
                <CardMain 
                title='Sotware Educacional'
                describe='Um software que torna visível o entendimento do fenômeno de transferência de carga da eletrodinâmica.'
                describeDetail='Sotware criando com o Python como projeto final
                        de uma disciplina de Física durante a minha graduação.
                        Projeto interdisciplinar que eu idealizei com o intuito
                        de entregar o projeto final e estudar programação ao mesmo tempo.'
                imagePath='/project-sotware-educacional.jpg'
                languages={['Python']}
                linkApplication={'https://github.com/JoaoNogueira23/ProjectsPython/tree/main/SimulationOfPhisical'}
                />
            </div>
        </div>
    )
}