import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Container from '../../../components/Container'
import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
          
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:ianluccaac@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://www.instagram.com/ianlucca.costa/' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                      {/*  <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a> */}

                        <a href='https://github.com/IanLucca1' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/ian-lucca-351a94250/' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
            
        </>
    )
}

export default Contatos