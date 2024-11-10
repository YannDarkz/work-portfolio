import styles from './about.module.scss'


const About = () => {

    const caminhoCurriculo = './YannCurriculo.pdf'

    const handleLink = () => {

        
        setTimeout(() => {

            window.open(caminhoCurriculo, '_blank')
        },1000)
    
    }

    return (
        <div id='about' className={styles.about_container}>
            <h2>Sobre Mim</h2>

            <h6>  Sou um desenvolvedor front-end!  </h6>

            <p className={styles.coment}> Apaixonado pela área de tecnologia, e tenho certeza que posso contribuir em qualquer time com as minhas habilidades! </p>
            <p className={styles.coment}> Estou sempre me desafiando com novos trabalhos e participando de comunidades de programação para buscar feedback de outros desenvolvedores. Além de tentar ajudar essas pessoas com o meu conhecimento!</p>
            <button onClick={handleLink}  rel='noopener noreferrer' >
                <svg>
                    <rect x="0" y="0" width="100%" height="100%" />
                </svg>
                Meu Curriculo!
            </button>
        </div>
    )
}

export default About
