'use client'
import { useState } from "react";
import styles from './styles.module.sass';
import CardMain from "../pages/projects/pieces/cardMain";


const data = [
    {
      "title": "Painel de Gerenciamento de Prontuários",
      "describe": "Uma aplicação que fornece funcionalidades que ajudam médicos a ter uma maior controle de prontuários/atestados de seus pacientes",
      "describeDetail": "O objetivo deste projeto é oferecer funcionalidades que possam facilitar o gerenciamento de dados médicos, uma ideia surgiu que durante uma conversa informal com um amigo médico, que expressou a necessidade urgente de um sistema que lhe ajudasse de uma forma organizacional e dinâmica.",
      "imagePath": "/project_medical_control.jpg",
      "languages": ["TypeScript", "MUI", "NodeJS", "Google Cloud"],
      "linkApplication": "https://medical-control.vercel.app/"
    },
    {
      "title": "Sotware Educacional",
      "describe": "Um software que torna visível o entendimento do fenômeno de transferência de carga da eletrodinâmica.",
      "describeDetail": "Software criado com o Python como projeto final de uma disciplina de Física durante a minha graduação. Projeto interdisciplinar que eu idealizei com o intuito de entregar o projeto final e estudar programação ao mesmo tempo.",
      "imagePath": "/project-sotware-educacional.jpg",
      "languages": ["Python"],
      "linkApplication": "https://github.com/JoaoNogueira23/ProjectsPython/tree/main/SimulationOfPhisical"
    },
    {
      "title": "Web Scraping",
      "describe": "Extração de notícias sobre futebol",
      "describeDetail": "Projeto criado com o intuito de treinar a utilização de recursos da AWS, além da utilização de algoritmos de RPA.",
      "imagePath": "/project_soccer_cortada.JPEG",
      "languages": ["Python", "AWS", "MySQL"],
      "linkApplication": "https://github.com/JoaoNogueira23/news-scraping"
    },
    {
      "title": "Contador de frequência",
      "describe": "Gerenciador de frequência de indivíduos durante um período de aulas ou afins.",
      "describeDetail": "Projeto desenvolvido com o intuito de gerenciar as minhas faltas nas disciplinas durante os semestres na faculdade, um algoritmo desenvolvido tanto para suprir uma necessidade minha e de amigos quanto para treinar minhas habilidades com o Python. Ele gera um relatório em Excel como feedback para o usuário.",
      "imagePath": "/project_frequencia.jpg",
      "languages": ["Python", "Excel"],
      "linkApplication": "https://github.com/JoaoNogueira23/ProjectsPython/tree/main/ContadorFrequencia"
    }
]

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    console.log(newIndex)
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(newIndex)
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.previousImage}>
            <CardMain 
                title={currentIndex != 0 ? data[(currentIndex - 1) % data.length]['title'] : data[data.length - 1]['title']}
                describe={currentIndex != 0 ? data[(currentIndex - 1) % data.length]['describe'] : data[data.length - 1]['describe']}
                describeDetail={currentIndex != 0 ? data[(currentIndex - 1) % data.length]['describeDetail'] : data[data.length - 1]['describeDetail']}
                imagePath={currentIndex != 0 ? data[(currentIndex - 1) % data.length]['imagePath'] : data[data.length - 1]['imagePath']}
                languages={currentIndex != 0 ? data[(currentIndex - 1) % data.length]['languages'] : data[data.length - 1]['languages']}
                linkApplication={currentIndex != 0 ? data[(currentIndex - 1) % data.length]['linkApplication'] : data[data.length - 1]['linkApplication']}
            />
        </div>
        <div className={styles.currentImage}>
            <CardMain 
                title={data[(currentIndex) % data.length]['title']}
                describe={data[(currentIndex) % data.length]['describe']}
                describeDetail={data[(currentIndex) % data.length]['describeDetail']}
                imagePath={data[(currentIndex) % data.length]['imagePath']}
                languages={data[(currentIndex) % data.length]['languages']}
                linkApplication={data[(currentIndex) % data.length]['linkApplication']}
            />
        </div>
        <div className={styles.nextImage}>
            <CardMain 
                title={currentIndex != data.length - 1 ? data[(currentIndex + 1) % data.length]['title'] : data[0]['title']}
                describe={currentIndex != data.length - 1 ? data[(currentIndex + 1) % data.length]['describe'] : data[0]['describe']}
                describeDetail={currentIndex != data.length - 1 ? data[(currentIndex + 1) % data.length]['describeDetail'] : data[0]['describeDetail']}
                imagePath={currentIndex != data.length - 1 ? data[(currentIndex + 1) % data.length]['imagePath'] : data[0]['imagePath']}
                languages={currentIndex != data.length - 1 ? data[(currentIndex + 1) % data.length]['languages'] : data[0]['languages']}
                linkApplication={currentIndex != data.length - 1 ? data[(currentIndex + 1) % data.length]['linkApplication'] : data[0]['linkApplication']}
            />
        </div>
      </div>

      <div className={styles.containerSliceButtons}>
            <button className={styles.buttonSlice} onClick={goToPrevious}>PREV</button>
            <button className={styles.buttonSlice} onClick={goToNext} >NEXT</button>
      </div>

      <div className={styles.progressBar}>
        {data.map((_, index) => (
          <span
            key={index}
            className={`${styles.progressCircle} ${currentIndex === index ? styles.active : ''}`}
          ></span>
        ))}
      </div>

      
      
    </div>
  );
};

export default ImageSlider;
