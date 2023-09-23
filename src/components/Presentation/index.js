import Image from 'next/image'

import styles from './Presentation.module.css'

import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiGit,
} from 'react-icons/Si'

import { TbBrandNextjs } from 'react-icons/Tb'

export default function Presentation() {
  return (
    <main className={styles.container} id='skills'>
      <div className={styles.skills} data-aos='fade-up' data-aos-delay='100'>
        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <TbBrandNextjs size={52} weight='thin' />
            <p>Nextjs</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <SiReact size={52} weight='thin' />
            <p>React</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <SiJavascript size={52} weight='thin' />
            <p>Javascript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <SiTypescript size={52} weight='thin' />
            <p>Typescript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <SiCss3 size={52} weight='thin' />
            <p>Css</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <SiHtml5 size={52} weight='thin' />
            <p>Html</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <SiGit size={52} weight='thin' />
            <p>Git</p>
          </span>
        </div>
      </div>

      <div className={styles.diferentials}>
        <span data-aos='fade-up' data-aos-delay='100'>
          <h1 data-aos='fade-up' data-aos-delay='100'>
            Imagens com IA
          </h1>
          <p>
            Transformo seu site em uma obra de arte visual, criando imagens
            únicas e impactantes utlizando inteligência artificial.
          </p>
          <Image
            src='/images/iahand.png'
            width={1280}
            height={1280}
            alt='ia'
            className={styles.ia}
          />
        </span>
        <span data-aos='fade-up' data-aos-delay='100'>
          <h1>Percepção de Design</h1>
          <p>
            Transformo seu site em uma obra de arte visual, criando imagens
            únicas e impactantes utlizando inteligência artificial.
          </p>

          <Image
            src='/images/designface.png'
            width={1280}
            height={1280}
            alt='design'
            className={styles.design}
          />
        </span>

        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className={styles.detailsH1}
        >
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.thinh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.thinh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
        </div>
      </div>
    </main>
  )
}
