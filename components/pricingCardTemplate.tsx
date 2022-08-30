import styles from './pricingCardTemplate.module.css';
import Button from './ui/button';

interface PricingCardProps {
    header?: string;
    text?: string;
    price?:string;
    frequency?:string;
    classNameColor?:string;
    classNameCardColor?:string;
    classNameButton?:string;
    classNameText?:string;
}

const PricingCardTemplate:React.FC<PricingCardProps> = (props) => {
    return (
        <div className={`${styles.card} ${props.classNameCardColor}`}>
            <h3 className={`${styles.header} ${props.classNameColor}`}>{props.header}</h3>
            <p className={`${styles.text} ${props.classNameText}`}>{props.text}</p>
            <p className={`${styles.price} ${props.classNameColor}`}>{props.price}</p>
            <p className={styles.frequency}>{props.frequency}</p>
            <Button className={props.classNameButton}>pick plan</Button>
        </div>
    )
}

export default PricingCardTemplate;