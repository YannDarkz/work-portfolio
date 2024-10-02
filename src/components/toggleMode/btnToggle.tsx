import { useState } from "react"
import '../../index.scss'
import styles from './btn_toggle.module.scss'

const ToggleDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };


    return (
        <div className={`${styles.toggle_switch} ${isDarkMode ? styles.dark : ''}`} onClick={toggleDarkMode}>
            <div className={`${styles.toggle_circle} ${isDarkMode ? styles.dark : ''}  `}></div>
        </div>
    )
}

export default ToggleDarkMode