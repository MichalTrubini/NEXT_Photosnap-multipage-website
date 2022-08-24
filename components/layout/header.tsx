import styles from "./header.module.css";
import logo from "../../public/assets/shared/desktop/logo.svg";
import hamburger from "../../public/assets/shared/mobile/menu.svg";

import Image from "next/image";
import Link from "next/link";
import Button from "../button";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Image src={logo} alt="photosnap" />
        </div>
        <ul className={styles.list}>
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
        <Button className={`${styles.button_header} button_dark`}>
          get an invite
        </Button>
        <div className={styles.hamburger}>
          <Image src={hamburger} alt="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
