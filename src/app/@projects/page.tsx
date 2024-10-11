import './projects.scss'
import ImageSlider from '@/components/Slider'

export default function ProjectsPage(){
    return(
        <div className="container-projects" id='projects'>
            <div className="title-section">
                <h2>Projetos</h2>
            </div>

            <ImageSlider />
        </div>
    )
}