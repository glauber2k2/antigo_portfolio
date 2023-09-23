import Image from 'next/image'

import { FileJs, FileTs, AngularLogo, Atom, FigmaLogo } from 'phosphor-react'

export default function Presentation() {
  return (
    <main
      className='flex flex-col w-full h-full py-12 px-8 gap-[3vh]'
      id='skills'
    >
      <div
        className='relative bg-black p-2 text-black flex justify-center gap-4 before:content-["Habilidades"] before:text-white before:text-xl before:absolute before:top-[-32px] before:w-full before:text-center  before:bg-black before:px-1 flex-wrap'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <svg
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 48 48'
              className='sm:w-12 sm:h-12 w-10 h-10'
            >
              <path
                fill='#000000'
                d='M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z'
              ></path>
            </svg>
            <p className='sm:flex hidden'>Nextjs</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <Atom className='sm:w-12 sm:h-12 w-10 h-10' weight='fill' />
            <p className='sm:flex hidden'>React</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <FileJs className='sm:w-12 sm:h-12 w-10 h-10' weight='fill' />
            <p className='sm:flex hidden'>Javascript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <FileTs className='sm:w-12 sm:h-12 w-10 h-10' weight='fill' />
            <p className='sm:flex hidden'>Typescript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <svg
              x='0px'
              y='0px'
              width='100'
              height='100'
              viewBox='0 0 24 24'
              className='sm:w-12 sm:h-12 w-10 h-10'
            >
              <path d='M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z'></path>
            </svg>
            <p className='sm:flex hidden'>TailwindCSS</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <AngularLogo className='sm:w-12 sm:h-12 w-10 h-10' weight='fill' />
            <p className='sm:flex hidden'>Angular</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span className='flex w-14 sm:w-[10vw] h-32 sm:h-[16vw] flex-col justify-center items-center gap-2 ease-out duration-300 bg-purple-500 select-none hover:scale-110'>
            <FigmaLogo className='sm:w-12 sm:h-12 w-10 h-10' weight='fill' />
            <p className='sm:flex hidden'>Figma</p>
          </span>
        </div>
      </div>

      <div className='flex items-center  justify-center sm:justify-evenly w-full h-full sm:gap-12 gap-8 flex-wrap'>
        <span
          data-aos='fade-up'
          data-aos-delay='100'
          className='relative flex flex-col items-center border border-purple-600 w-80 sm:w-[30%] h-[90%]'
        >
          <h1
            data-aos='fade-up'
            data-aos-delay='100'
            className='sm:text-[4vw] text-purple-500 p-4 sm:p-8 text-center sm:text-start text-[46px]'
          >
            Imagens com IA
          </h1>
          <p className='sm:text-[1.2vw] text-purple-500 sm:p-8 text-justify text-[16px] p-4 sm:text-start h-32 md:h-48 xl:h-60'>
            Transformo seu site em uma obra de arte visual, criando imagens
            únicas e impactantes utlizando inteligência artificial.
          </p>
          <Image
            src='/images/iahand.png'
            width={1280}
            height={1280}
            alt='ia'
            className='flex absolute object-scale-down w-full sm:h-full h-48 top-[-15%] sm:top-[-25%]'
          />
        </span>
        <span
          data-aos='fade-up'
          data-aos-delay='100'
          className='relative flex flex-col items-center border border-purple-600 w-80 sm:w-[30%] h-[90%]'
        >
          <h1 className='sm:text-[4vw] text-purple-500 p-4 sm:p-8 text-center sm:text-start text-[46px]'>
            Percepção de Design
          </h1>
          <p className='sm:text-[1.2vw] text-purple-500 sm:p-8 text-justify text-[16px] p-4 sm:text-start h-32 md:h-48 xl:h-60'>
            Sempre tive como hobbie edição grafica, e hoje possuo uma ótima
            percepção para design, e assim construindo para criar boas
            interfaces.
          </p>

          <Image
            src='/images/designface.png'
            width={1280}
            height={1280}
            alt='design'
            className='flex absolute object-scale-down w-1/2 sm:h-1/2 h-2/5 bottom-[-5%] left-[-20%]'
          />
        </span>

        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className='md:flex hidden flex-col text-[1.9vw] gap-[1vw]'
        >
          <h1 className='font-semibold text-purple-200 opacity-30'>
            DIFERENCIAIS
          </h1>
          <h1 className='font-semibold text-purple-500 opacity-30'>
            DIFERENCIAIS
          </h1>
          <h1 className='font-semibold text-purple-200 opacity-30'>
            DIFERENCIAIS
          </h1>
          <h1 className='font-semibold text-purple-500 opacity-30'>
            DIFERENCIAIS
          </h1>
          <h1 className='font-semibold text-purple-200 opacity-30'>
            DIFERENCIAIS
          </h1>
        </div>
      </div>
    </main>
  )
}
