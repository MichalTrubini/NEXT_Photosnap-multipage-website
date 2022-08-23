import styles from './button.module.css';

interface ButtonProps {
    children?: React.ReactNode;
    className: string;
}

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <div className={`${styles.button} ${props.className}`}>{props.children}</div>
    )
}

export default Button;