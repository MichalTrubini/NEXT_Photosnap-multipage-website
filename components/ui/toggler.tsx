import { useState } from 'react';
import styles from './toggler.module.css'

const Toggler = () => {

    const [frequency, setFrequency ] = useState(true);

    const frequencyHandler = () => {
        setFrequency(prevState => !prevState)
    }

    return (
        <div className={styles.container}>
            <p className={frequency ? `${styles.text_clicked} ${styles.text}` : styles.text}>Monthly</p>
            <div className={styles.toggler} onClick={frequencyHandler}>
                <div className={frequency ? `${styles.toggle_left} ${styles.toggle}` : `${styles.toggle_right} ${styles.toggle}`}></div>
            </div>
            <p className={!frequency ? `${styles.text_clicked} ${styles.text}` : styles.text}>Yearly</p>
        </div>
    )
}

export default Toggler;