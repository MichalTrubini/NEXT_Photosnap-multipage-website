interface HeroProps {
    children?: React.ReactNode;
    src?: any;
    alt?: string;
    header?: string;
    text?: string;
    cta?: string;
    classNameContent?: string;
    classNameImage?: string;
    date?:string;
    author?: string;
    none?:string;
    subtitle?:string;
    noArrow?:string;
    classNameHero?:string;
    classNameHeader?:string;
    classNameText?:string;
    classNameCtaText?:string;
    classNameArrow?:string;
    link?:string;
  }

import styles from './hero.module.css';
import Image from "next/image";
import arrow from "../public/assets/shared/desktop/arrow.svg";
import Link from 'next/link';

const Hero:React.FC<HeroProps> = (props) => {
    return (
        <div className={`${styles.hero} ${props.classNameHero}`}>
            <div className={`${styles.imageContainer} ${props.classNameImage}`}>
                <Image src={props.src} alt={props.alt} layout='fill' className={styles.image}/>
            </div>
            <div className={`${styles.content} ${props.classNameContent}`}>
                <p className={`${styles.subtitle} ${props.none}`}>{props.subtitle}</p>
                <h1 className={`${styles.header} ${props.classNameHeader}`}>{props.header}</h1>
                <p className={`${styles.date} ${props.none}`}>{props.date}<span className={styles.author}>{props.author}</span></p>
                <p className={`${styles.text} ${props.classNameText}`}>{props.text}</p>
                <div className={`${styles.cta} ${props.noArrow}`}>
                    <Link href={`/${props.link}`}><p className={`${styles.cta_text} ${props.classNameCtaText}`}>{props.cta}</p></Link>
                    <Image src={arrow} alt='arrow' className={`${styles.arrow} ${props.classNameArrow}`}/>
                </div>
            </div>
        </div>
    )
}

export default Hero;