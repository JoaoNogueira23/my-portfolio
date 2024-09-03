"use client"
import Image from 'next/image'
import '../projects.scss'
import { useState } from 'react'
import IconInformation from '@/components/icons/IconInfo';

interface PropsProject  {
    title: string;
    describe: string;
    describeDetail: string;
    imagePath: string;
    languages: string[];
    linkApplication: string;
}

export default function CardMain({title, describe, describeDetail, imagePath, languages, linkApplication}: PropsProject) {

    const [typeCard, setTypeCard] = useState<number>(1)

    return(
        typeCard == 1 ? (
            <div className="container-card">
                
               
                <div className="button-change-card" onClick={() => setTypeCard(2)}>
                    <span className='icon-info'>
                        <IconInformation />
                    </span>
                    
                    <span className='tooltip-card'>Clique aqui para mais informações.</span>
                </div>
            
                <div className="card-project">
                    <Image
                    src={imagePath}
                    width={300}
                    height={200}
                    className='img-project'
                    alt='Imagem de descrição do projeto'
                    />

                    <h3 className='title-project'>
                        {title}
                    </h3>

                    <div className="describe-project">
                        {describe}
                    </div>

                </div>
            </div>
        ) : (
            <div className="container-card">
            
                <div className="button-change-card" onClick={() => setTypeCard(1)}>
                    <span className='icon-info'>
                        <IconInformation />
                    </span>
                    
                    <span className='tooltip-card'>Clique aqui para retornar ao card principal.</span>
                </div>
            
                <div className="card-project">

                    <h3 className='title-project-detail'>
                        {title}
                    </h3>

                    <div className="describe-project-detail">
                        {describeDetail}
                    </div>
                    
                    <div className="display-languages">
                        {languages.map(language => (
                            <div className="cards-language">
                                {language}
                            </div>
                        ))}
                    </div>

                    <a href={linkApplication} target='_blank'>
                        ACESSAR
                    </a>
                </div>
            </div>
        )
    )
}