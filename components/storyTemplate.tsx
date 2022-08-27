interface StoryTemplateProps {
  header?: string;
  author?: string;
  src?: any;
  alt?: string;
  date?:string;
}

import styles from "./storyTemplate.module.css";
import Image from "next/image";
import arrow from "../public/assets/shared/desktop/arrow.svg";

const StoryTemplate: React.FC<StoryTemplateProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_container}>
        <Image
          src={props.src}
          alt={props.alt}
          className={styles.image}
          layout="fill"
          sizes="(min-width: 1440px) 25vw,
              (min-width: 768px) 50vw,
              100vw"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.date}>{props.date}</p>
        <h3 className={styles.header}>{props.header}</h3>
        <p className={styles.author}>{"by " + props.author}</p>
        <div className={styles.cta}>
          <p className={styles.cta_text}>read the story</p>
          <div>
            <Image src={arrow} alt="read the story" className={styles.arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryTemplate;
