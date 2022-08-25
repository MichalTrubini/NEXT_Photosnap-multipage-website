interface HeroProps {
    children?: React.ReactNode;
    src?: any;
    alt?: string;
    header?: string;
    text?: string;
    cta?: string;
    className?: string;
    date?:string;
    author?: string;
    none?:string;
    subtitle?:string;
    noArrow?:string;
  }

import styles from './hero.module.css';
import Image from "next/image";
import arrow from "../public/assets/shared/desktop/arrow.svg";

const Hero:React.FC<HeroProps> = (props) => {
    return (
        <div className={styles.hero}>
            <div className={styles.imageContainer}>
                <Image src={props.src} alt={props.alt} />
            </div>
            <div className={`${styles.content} ${props.className}`}>
                <p className={`${styles.subtitle} ${props.none}`}>{props.subtitle}</p>
                <h1 className={styles.header}>{props.header}</h1>
                <p className={`${styles.date} ${props.none}`}>{props.date}<span className={styles.author}>{props.author}</span></p>
                <p className={styles.text}>{props.text}</p>
                <div className={`${styles.cta} ${props.noArrow}`}>
                    <p className={styles.cta_text}>{props.cta}</p>
                    <Image src={arrow} alt='arrow' className={styles.arrow}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;