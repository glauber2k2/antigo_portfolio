import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ProjectWindow.module.css';
import Link from 'next/link';

export default function ProjectWindow() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [detalhesRepositorios, setDetalhesRepositorios] = useState([]);

  useEffect(() => {
    // Função para fazer uma requisição e lidar com erros
    const fetchWithAuth = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro na requisição para ${url}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Erro:', error);
        return null;
      }
    };

    // Buscar lista de repositórios
    fetchWithAuth('https://api.github.com/users/glauber2k2/repos')
      .then((data) => {
        if (data) {
          // Filtrar repositórios que começam com "_"
          const filteredRepositories = data.filter((repo) => repo.description.startsWith('*'));
          const repositoryNames = filteredRepositories.map((repo) => repo.name);
          return Promise.all(
            repositoryNames.map((name) =>
              fetchWithAuth(`https://api.github.com/repos/glauber2k2/${name}`)
            )
          );
        }
        return [];
      })
      .then((responses) => {
        const validResponses = responses.filter((response) => response !== null);
        setDetalhesRepositorios(validResponses);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Image src="/images/laptop.png" width={1080} height={1080} alt="" />
      <div className={styles.window}>
        <div className={styles.content}>
          <Image src="/images/mylogo.png" width={1080} height={1080} alt="" />
          <h1>ROLE P/ BAIXO</h1>
        </div>

        {detalhesRepositorios.map((repo) => (
          <Link key={repo.id} href={repo.homepage} legacyBehavior>
            <a target="_blank">
              <div
                className={`${styles.content} ${hoveredItem === repo.name ? styles.hovered : ''}`}
                onMouseEnter={() => setHoveredItem(repo.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  src={`https://raw.githubusercontent.com/glauber2k2/${repo.name}/main/public/thumb.png`}
                  width={1080}
                  height={1080}
                  alt=""
                />
                <h1>{repo.name.split('_')}</h1>
                {hoveredItem === repo.name && <p>{repo.topics.join(' - ')}</p>}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
