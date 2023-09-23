import Image from 'next/image'
import ProjectWindow from '../ProjectWindow'
// import { BiChevronsDown } from 'react-icons/Bi'

import styles from './Projects.module.css'

export default function Projects() {
  return (
    <main className={styles.container} id='projects'>
      <div className={styles.topContainer}>
        <div className={styles.title} data-aos='fade-up' data-aos-delay='100'>
          <h1>
            MEUS <span>PROJETOS</span>
          </h1>
          <h3>
            Venha conhecer alguns de meus ultimos projetos! e veja o sentimento
            que um site bem feito é capaz de passar ao acessante.
          </h3>
        </div>
        <div className={styles.images} data-aos='fade-up' data-aos-delay='150'>
          <Image
            src='/images/projects1.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image1}
            data-aos='fade-up'
            data-aos-delay='200'
          />

          <Image
            src='/images/projects2.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image2}
            data-aos='fade-up'
            data-aos-delay='250'
          />

          <Image
            src='/images/project3.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image3}
            data-aos='fade-up'
            data-aos-delay='300'
          />

          <Image
            src='/images/projects4.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image4}
            data-aos='fade-up'
            data-aos-delay='350'
          />
        </div>
      </div>
      <div
        className={styles.bottomContainer}
        data-aos='fade-up'
        data-aos-delay='350'
      >
        <div
          className={styles.notebook}
          data-aos='zoom-in-up'
          data-aos-delay='100'
          data-aos-duration='1000'
        >
          <ProjectWindow />
        </div>

        {/* <BiChevronsDown size={64} color='#fcfcfc' weight='duotone' /> */}
        <div className={styles.projectMsg}>
          <h2>
            Use o notebook para <span>visualizar</span> os meus projetos.
          </h2>

          <h3>
            Clique no projeto que deseja visualizar, e automaticamente será
            <span>redirecionado</span> para a visualização completa da página.
          </h3>
        </div>
      </div>
    </main>
  )
}
