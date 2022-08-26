import styles from "./header.module.css";
import logo from "../../public/assets/shared/desktop/logo.svg";
import hamburger from "../../public/assets/shared/mobile/menu.svg";
import close from "../../public/assets/shared/mobile/close.svg";

import Image from "next/image";
import Link from "next/link";
import Button from "../button";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const mobileMenuHandler = () => {
    setMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      {menuVisible && <div className={styles.overlay}></div>}
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <Link href='/'><a><Image src={logo} alt="photosnap" /></a></Link>
          </div>
          <ul
            className={
              menuVisible
                ? `${styles.list} ${styles.list_visible}`
                : styles.list
            }
          >
            <Link href="/stories">
              <li className={styles.list_item}>stories</li>
            </Link>
            <Link href="/features">
              <li className={styles.list_item}>features</li>
            </Link>
            <Link href="/pricing">
              <li className={styles.list_item}>pricing</li>
            </Link>
          </ul>
          <Button
            className={
              menuVisible
                ? `${styles.button_header} ${styles.button_header_visible} button_dark`
                : `${styles.button_header} button_dark`
            }
          >
            get an invite
          </Button>
          <div className={styles.hamburger}>
            <Image
              src={menuVisible ? close : hamburger}
              alt="menu"
              onClick={mobileMenuHandler}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
