import Image from 'next/image'
import "./home.scss"

export default function Home() {
  return (
    <main className='container-home'>
      {/* div decribe */}
      <div>
        <p className='position'>
          Software Developer Full Stack
        </p>
        <h2>
          Hi, I'm João Martins!
        </h2>
        <p className="apresentation">
        I have been immersed in the world of software development for over 2 years, <br/>
        with 1.5 years of experience in a banking company in Brazil.
        </p>
      </div>

      <Image
         src="/image_home.png"
         width={600}
         height={590}
         alt="Picture Home"
         className='image-home'
      />
    </main>
  );
}
