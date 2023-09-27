import Image from 'next/image'
import Link from 'next/link'
import { Lock } from 'phosphor-react'
import { useEffect, useState } from 'react'
import styles from './ProjectWindow.module.css'

export default function ProjectWindow() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    // Fazer uma solicitação usando fetch
    fetch('https://api.github.com/users/glauber2k2/repos')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível obter os repositórios.')
        }
        return response.json()
      })
      .then((data) => {
        // Filtrar os repositórios com descrição começada por "*"
        const filteredRepositories = data.filter(
          (repo) => repo.description && repo.description.startsWith('*')
        )
        setRepositories(filteredRepositories)
        // Armazenar os repositórios filtrados no estado "repositories"
      })
      .catch((error) => {
        console.error(error)
        setRepositories(null)
      })
  }, [])

  return (
    <div className={styles.container}>
      <Image src='/images/laptop.png' width={1080} height={1080} alt='' />
      <div className={styles.window}>
        {repositories !== null && repositories.length !== 0 && (
          <div className={styles.content}>
            <Image src='/images/mylogo.png' width={1080} height={1080} alt='' />
            <h1>ROLE P/ BAIXO</h1>
          </div>
        )}

        {repositories !== null && repositories.length === 0 && (
          <div className='h-full flex justify-center items-center gap-4'>
            <div className='loader border-t-2 rounded-full border-purple-500  animate-spin aspect-square w-8 flex justify-center items-center text-yellow-700'></div>
            <h1 className='text-sm animate-pulse'>Loading</h1>
          </div>
        )}

        {repositories === null && (
          <div className='h-full flex justify-center items-center gap-1 flex-col'>
            <Lock className='w-10 h-10' weight='duotone' />
            <h1 className='text-sm animate-pulse text-center'>
              Falha ao conectar com o GitHub.
            </h1>
          </div>
        )}

        {repositories !== null
          ? repositories.map((repo) => (
              <Link key={repo.id} href={repo.homepage} legacyBehavior>
                <a target='_blank'>
                  <div
                    className={`${styles.content} ${
                      hoveredItem === repo.name ? styles.hovered : ''
                    }`}
                    onMouseEnter={() => setHoveredItem(repo.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/glauber2k2/${repo.name}/main/public/thumb.png`}
                      width={1080}
                      height={1080}
                      alt=''
                    />
                    <h1 className='capitalize'>{repo.name}</h1>
                    {hoveredItem === repo.name && (
                      <p className='capitalize'>
                        {repo.topics.sort().join(' - ')}
                      </p>
                    )}
                  </div>
                </a>
              </Link>
            ))
          : ''}
      </div>
    </div>
  )
}