'use client'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'

import styles from '../app/Home.module.css'
import ModalPwa from '@/components/ModalPwa'

export default function Home() {
  return (
    <>
      <Head>
        <title>DevGlauber</title>
      </Head>

      <div className={styles.container}>
        <Navbar />
        <Presentation />
        <Projects />
        <ModalPwa />
      </div>
    </>
  )
}
