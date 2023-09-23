import Image from 'next/image'

import styles from './Presentation.module.css'

import {
  FileJs,
  FileTs,
  Waves,
  AngularLogo,
  Atom,
  FigmaLogo,
} from 'phosphor-react'

import { TbBrandNextjs } from 'react-icons/Tb'

export default function Presentation() {
  return (
    <main className={styles.container} id='skills'>
      <div className={styles.skills} data-aos='fade-up' data-aos-delay='100'>
        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <TbBrandNextjs className='w-12 h-12' weight='fill' />
            <p>Nextjs</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <Atom className='w-12 h-12' weight='fill' />
            <p>React</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FileJs className='w-12 h-12' weight='fill' />
            <p>Javascript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FileTs className='w-12 h-12' weight='fill' />
            <p>Typescript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <Waves className='w-12 h-12' weight='fill' />
            <p>TailwindCSS</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <AngularLogo className='w-12 h-12' weight='fill' />
            <p>Angular</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FigmaLogo className='w-12 h-12' weight='fill' />
            <p>Figma</p>
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
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
        </div>
      </div>
    </main>
  )
}
