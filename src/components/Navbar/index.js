'use client'

import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ProjectorScreen,
  MouseSimple,
  LinkedinLogo,
  WhatsappLogo,
  InstagramLogo,
  GithubLogo,
  CaretDoubleDown,
} from 'phosphor-react'

import { useEffect } from 'react'

import styles from './Navbar.module.css'

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      once: true,
    }) // Inicializa a biblioteca AOS
  }, [])

  const abrirWpp = () => {
    window.open('https://wa.me/message/RS2XYE5ZIENTB1', '_blank')
  }

  const abrirInsta = () => {
    window.open('https://www.instagram.com/devglauber/', '_blank')
  }

  const abrirGit = () => {
    window.open('https://github.com/glauber2k2/', '_blank')
  }

  const abrirLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/glauber-monteiro-40439b238/',
      '_blank'
    )
  }

  return (
    <div className={styles.container}>
      <nav className='flex flex-col sm:flex-row justify-between items-center sm:items-start w-full h-[10vh] py-3 px-5'>
        <div
          className='flex text-center justify-center'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <Image
            src='/images/mylogo.png'
            width={1280}
            height={1280}
            alt=''
            className='w-16 h-16 object-scale-down'
          />

          <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold text-xl sm:text-2xl tracking-tight'>
              Glauber Monteiro
            </h1>
            <h3 className='tracking-tighter	text-purple-600 font-semibold mt-[-0.7rem] text-xs sm:text-base'>
              Web Developer
            </h3>
          </div>
        </div>

        <div
          className='flex justify-center items-center gap-8 mt-4'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <button
            onClick={() => {
              const targetElement = document.getElementById('skills')
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className='flex items-center justify-center gap-1 border-none text-white font-medium text-base cursor-pointer'
          >
            <MouseSimple className='w-6 h-6' />
            <p>Habilidades</p>
          </button>

          <button
            onClick={() => {
              const targetElement = document.getElementById('projects')
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className='flex items-center justify-center gap-1 border-none text-white font-medium text-base cursor-pointer'
          >
            <ProjectorScreen className='w-6 h-6' />
            <p>Projetos</p>
          </button>
        </div>
      </nav>
      <main className='flex flex-col p-4 sm:p-36 h-4/5 justify-center'>
        <h1
          data-aos='fade-up'
          data-aos-delay='600'
          className='text-[42px] sm:text-[8vw] sm:text-start text-center leading-none'
        >
          Glauber
        </h1>
        <h1
          data-aos='fade-up'
          data-aos-delay='700'
          className='text-[42px] sm:text-[8vw] sm:text-start text-center leading-none'
        >
          Monteiro
        </h1>
        <h4
          data-aos='fade-up'
          data-aos-delay='800'
          className='text-center sm:text-start sm:text-lg sm:tracking-widest px-6 text-sm sm:px-0 sm:w-1/2 sm:mt-0 mt-4'
        >
          Sou desenvolvedor front-end, tenho 21 anos e trabalho com criação de
          websites. Atualmente moro em João Pessoa, PB!
        </h4>
        <div
          data-aos='fade-up'
          data-aos-delay='900'
          className='flex flex-col sm:flex-row sm:gap-4 justify-center items-center sm:justify-start sm:mt-2'
        >
          <button
            onClick={abrirWpp}
            className='flex justify-center items-center w-52 h-10 sm:h-12 sm:w-72 gap-4 rounded-lg bg-white hover:bg-purple-500 text-black text-lg font-medium sm:mt-0 mt-8'
          >
            <WhatsappLogo weight='fill' className='w-6 h-6' />
            Fale comigo!
          </button>

          <div className='flex gap-8 items-center justify-center sm:gap-4 mt-4 sm:mt-0'>
            <button
              onClick={abrirInsta}
              className='bg-white hover:bg-purple-500 rounded-full text-black w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center'
            >
              <InstagramLogo
                weight='fill'
                className=' w-4 h-4 sm:w-6 sm:h-6 '
              />
            </button>
            <button
              onClick={abrirGit}
              className='bg-white hover:bg-purple-500 rounded-full text-black w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center'
            >
              <svg
                x='0px'
                y='0px'
                width='100'
                height='100'
                viewBox='0 0 72 72'
                className='w-10 h-10'
              >
                <path d='M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z'></path>
              </svg>
            </button>
            <button
              onClick={abrirLinkedin}
              className='bg-white hover:bg-purple-500 rounded-full text-black w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center'
            >
              <LinkedinLogo weight='fill' className=' w-4 h-4 sm:w-6 sm:h-6 ' />
            </button>
          </div>
        </div>
      </main>

      <CaretDoubleDown
        weight='bold'
        data-aos='fade-up'
        data-aos-delay='2000'
        className='absolute left-[50%] sm:left-[49%] animate-bounce  sm:w-8 sm:h-8 2xl:w-10 2xl:h-10 cursor-pointer'
        onClick={() => {
          const targetElement = document.getElementById('skills')
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      />
    </div>
  )
}
