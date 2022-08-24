import styles from "./footer.module.css";

import arrow from "../../public/assets/shared/desktop/arrow.svg";
import logo from "../../public/assets/shared/desktop/logoLight.svg";
import facebook from "../../public/assets/shared/desktop/facebook.svg";
import youtube from "../../public/assets/shared/desktop/youtube.svg";
import twitter from "../../public/assets/shared/desktop/twitter.svg";
import pinterest from "../../public/assets/shared/desktop/pinterest.svg";
import instagram from "../../public/assets/shared/desktop/instagram.svg";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={logo} alt="photosnap" />
          </div>
          <div className={styles.social}>
            <div>
              <Image src={facebook} alt="facebook" className={styles.icon} />
            </div>
            <div>
              <Image src={youtube} alt="youtube" className={styles.icon} />
            </div>
            <div>
              <Image src={twitter} alt="twitter" className={styles.icon} />
            </div>
            <div>
              <Image src={pinterest} alt="pinterest" className={styles.icon} />
            </div>
            <div>
              <Image src={instagram} alt="instagram" className={styles.icon} />
            </div>
          </div>
          <ul className={styles.list}>
            <Link href="/">
              <li className={styles.list_item}>home</li>
            </Link>
            <Link href="/">
              <li className={styles.list_item}>stories</li>
            </Link>
            <Link href="/">
              <li className={styles.list_item}>features</li>
            </Link>
            <Link href="/">
              <li className={styles.list_item}>pricing</li>
            </Link>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.invite_link}>
            <p className={styles.invite}>get an invite</p>
            <div className={styles.image_container}>
              <Image src={arrow} alt="arrow" className={styles.arrow} />
            </div>
          </div>
          <p className={styles.copyright}>
            Copyright 2019. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
