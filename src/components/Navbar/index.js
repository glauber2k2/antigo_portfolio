'use client'

import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BsWhatsapp, BsInstagram, BsGithub } from 'react-icons/Bs'
import { PiProjectorScreenChartFill } from 'react-icons/Pi'
import { SiLinkedin } from 'react-icons/Si'
import { BiChevronsDown, BiSolidMouse } from 'react-icons/Bi'

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
            <BiSolidMouse className='w-6 h-6' />
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
            <PiProjectorScreenChartFill className='w-6 h-6' />
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
            className='flex justify-center items-center w-52 h-10 sm:h-12 sm:w-72 gap-4 rounded-lg bg-white text-black text-lg font-medium hover:text-purple-800 sm:mt-0 mt-8'
          >
            <BsWhatsapp weight='fill' />
            Fale comigo!
          </button>

          <div className='flex gap-8 items-center justify-center sm:gap-4 mt-4 sm:mt-0'>
            <button
              onClick={abrirInsta}
              className='bg-white rounded-full text-black w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center hover:text-purple-800'
            >
              <BsInstagram weight='fill' className=' w-4 h-4 sm:w-6 sm:h-6 ' />
            </button>
            <button
              onClick={abrirGit}
              className='bg-white rounded-full text-black w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center hover:text-purple-800'
            >
              <BsGithub weight='fill' className=' w-4 h-4 sm:w-6 sm:h-6 ' />
            </button>
            <button
              onClick={abrirLinkedin}
              className='bg-white rounded-full text-black w-10 h-10 sm:h-12 sm:w-12 flex justify-center items-center hover:text-purple-800'
            >
              <SiLinkedin weight='fill' className=' w-4 h-4 sm:w-6 sm:h-6 ' />
            </button>
          </div>
        </div>
      </main>

      <BiChevronsDown
        weight='bold'
        data-aos='fade-up'
        data-aos-delay='2000'
        className='absolute left-[50%] animate-bounce w-8 h-8 sm:w-16 sm:h-16 cursor-pointer'
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
