// import React from 'react'

import styles from './project.module.scss';
import logo_costs from '../../images/Costs_resized.png';
import logo_apiGit from '../../images/api_github.png';
import logo_landingPage from '../../images/cleanLanding.png';
import logo_huddle from '../../images/lista-compras.png';


const Projects = () => {


    return (
        <div id='myProjects' className={styles.container_project}>
            <h2>Meus <strong>Projetos!</strong></h2>

            <div className={styles.projects_list}>
                <div className={`${styles.project} ${styles.first}}`}>
                    <a href='https://cost-ashy.vercel.app/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <img src={logo_costs} alt="Logo-projeto" />
                        <p className={styles.coment}>Genciador de projetos "Costs"</p>

                        <div className={styles.hover_content}>
                            <p className={styles.coment_1}>Esse é um projeto para gerenciar a criaçao de outros projetos.</p>
                            <p>🔗 Ver projeto online</p>
                        </div>
                    </a>
                </div>

                <div className={`${styles.project} ${styles.second}}`}>
                    <a href='https://yanndarkz.github.io/Busca-de-usuarioGitHub/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <img src={logo_apiGit} alt="Logo-projeto" />
                        <p className={styles.coment}>Busca de Usuário GitHub</p>

                        <div className={styles.hover_content}>
                            <p className={styles.coment_1}>Esse é um projeto para pesquisar informações de usuários do GitHub</p>
                            <p>🔗 Ver projeto online</p>
                        </div>
                    </a>
                </div>
                <div className={`${styles.project} ${styles.second}}`}>
                    <a href='https://yanndarkz.github.io/Clean-Landing-Page/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <img src={logo_landingPage} alt="Logo-projeto" />
                        <p className={styles.coment}>Landing Page Download 'APP'</p>

                        <div className={styles.hover_content}>
                            <p className={styles.coment_1}>WebSite para usuários da apple interagir e baixar o conteúdo.</p>
                            <p>🔗 Ver projeto online</p>
                        </div>
                    </a>
                </div>
                <div className={`${styles.project} ${styles.second}}`}>
                    <a href='https://shopping-list-gilt-alpha.vercel.app/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <img src={logo_huddle} alt="Logo-projeto" />
                        <p className={styles.coment}>Lista de Compras</p>

                        <div className={styles.hover_content}>
                            <p className={styles.coment_1}>Esse projeto tem o intuito de armazenar e gerenciar uma lista de compras de Super Mercado</p>
                            <p>🔗 Ver projeto online</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Projects