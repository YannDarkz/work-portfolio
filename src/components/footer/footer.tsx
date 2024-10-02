import styles from './footer.module.scss'
import React from "react"

import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";




const Footer: React.FC = () => {
    const emailAddress = "iansantostph@gmail.com";
    const subject = "Interesse em seus serviços";
    const body = "Olá, estou interessado em seus serviços!";
    const generateWhatsAppLink = (phoneNumber: string, message: string): string => {
        const encodeMessage = encodeURIComponent(message)
        return `https://wa.me/${phoneNumber}?text=${encodeMessage}`

    }

     const generateEmailLink = (emailAddress: string, subject: string, body: string): string => {
        const encodeSubject = encodeURIComponent(subject);
        const encodeBody = encodeURIComponent(body);
        return `mailto:${emailAddress}?subject=${encodeSubject}&body=${encodeBody}`;

    }


    return (
        <footer className={styles.container_footer}>
            <h2>Entre em Contato! <MdOutlineConnectWithoutContact size={20} /></h2>
            <nav>
                <ul>
                    <li> <a className={styles.wpp} rel='noopener noreferrer' target='_blank' href={generateWhatsAppLink('5571987740164', 'Olá me interessei no seu trabalho!')}><FaWhatsapp /></a>  </li>
                    <li> <a className={styles.email} rel='noopener noreferrer' target='_blank' href={generateEmailLink(emailAddress, subject, body)}><SiGmail /></a> </li>
                    <li> <a className={styles.linkedin} rel='noopener noreferrer' target='_blank' href="https://www.linkedin.com/in/yanndarkzinnn/"> <FaLinkedinIn /></a> </li>
                </ul>
            </nav>
        </footer >
    )
}


export default Footer