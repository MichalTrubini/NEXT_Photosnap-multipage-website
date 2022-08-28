import styles from "./featureTemplate.module.css";
import Image from "next/image";

interface FeatureTemplateProps {
  src?: any;
  alt?:string;
  header?: string;
  text?: string;
}

const FeatureTemplate: React.FC<FeatureTemplateProps> = (props) => {
  return (
    <div className={styles.feature}>
      <div className={styles.image_container}>
        <Image src={props.src} alt={props.alt} />
      </div>
      <h3 className={styles.header}>{props.header}</h3>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default FeatureTemplate;
