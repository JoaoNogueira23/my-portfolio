import Image from 'next/image'
import './projects.scss'
import CardMain from './pieces/cardMain'
import ImageSlider from '@/components/Slider'

export default function ProjectsPage(){
    return(
        <div className="container-projects" id='projects'>
            <div className="title-section">
                <h2>Projects</h2>
            </div>

            <ImageSlider />
        </div>
    )
}