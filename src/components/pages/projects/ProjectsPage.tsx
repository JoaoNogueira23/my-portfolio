import Image from 'next/image'
import './projects.scss'
import CardMain from './pieces/cardMain'

export default function ProjectsPage(){
    return(
        <div className="container-projects" id='projects'>
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
                imagePath='/project_soccer_cortada.JPEG'
                languages={['Python', 'AWS', 'MySQL']}
                linkApplication={'https://github.com/JoaoNogueira23/news-scraping'}
                />
                <CardMain 
                title='Contador de frequência'
                describe='Gerenciador de frequência de indivíduos durante um período de aulas ou afins.'
                describeDetail='Projeto desenvolvido com o intuito de gerenciar as minhas faltas nas disciplinas durante os semestres na faculdade, um algoritmo desenvolvido
                tanto para suprir uma necessidade minha e de amigos quanto para treinar minhas habilidades com o Python. Ele gera um relatório em Excel como feedback para o usuário.'
                imagePath='/project_frequencia.jpg'
                languages={['Python', 'Excel']}
                linkApplication={'https://github.com/JoaoNogueira23/ProjectsPython/tree/main/ContadorFrequencia'}
                />
            </div>
        </div>
    )
}