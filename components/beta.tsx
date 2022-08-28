import styles from "./beta.module.css";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/assets/shared/desktop/arrow.svg";

const Beta = () => {
  return (
    <div className={`${styles.beta} dividerTwo`}>
      <div className={styles.container}>
        <h1 className={styles.header}>We’re in beta. Get your invite today!</h1>
        <div className={styles.cta}>
          <Link href="/">
            <p className={styles.cta_text}>GET AN INVITE</p>
          </Link>
          <Image src={arrow} alt="arrow" className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default Beta;
