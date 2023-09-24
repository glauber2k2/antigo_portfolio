import ProjectWindow from '../ProjectWindow'
import { CaretDoubleDown } from 'phosphor-react'

export default function Projects() {
  return (
    <main
      className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-12 xl:h-screen sm:px-[10%] py-8 sm:py-12'
      id='projects'
    >
      {/* <Image src={} width={} height={} alt /> */}

      <div
        className='flex flex-col sm:w-1/2 w-full h-1/2 sm:h-full justify-center items-center p-4 gap-y-2'
        // data-aos='fade-up'
        // data-aos-delay='100'
      >
        <h1 className='sm:text-[4vw] text-3xl font-medium xl:h-20'>
          MEUS <span className='bg-purple-500 text-black'>PROJETOS</span>
        </h1>
        <h2 className='text-base sm:text-[1.5vw] font-medium xl:mb-4'>
          use o notebook abaixo!
        </h2>

        <h3 className='w-4/5 text-xs sm:text-[1vw] text-center'>
          Para visualziar meus projetos, role a tela do notebook. e veja como um
          site bem construido pode passar confiança a quem está acessando.
        </h3>
      </div>

      <div className='sm:w-1/2 w-full flex justify-center items-center h-1/2 sm:h-full'>
        <div
          className='w-[80%]  flex'
          // data-aos='zoom-in-up'
          // data-aos-delay='100'
          // data-aos-duration='1000'
        >
          <ProjectWindow />
          {/* <CaretDoubleDown className='w-12 h-12' weight='fill' /> */}
        </div>
      </div>
    </main>
  )
}
