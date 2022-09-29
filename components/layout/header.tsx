import styles from "./header.module.css";
import logo from "../../public/assets/shared/desktop/logo.svg";
import hamburger from "../../public/assets/shared/mobile/menu.svg";
import close from "../../public/assets/shared/mobile/close.svg";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { useState, useEffect } from "react";

const Header = () => {

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const widthInitial = window.innerWidth;
    setScreenWidth(widthInitial);

    function getWindowDimensions() {
      const widthCurrent = window.innerWidth;
      return widthCurrent;
    }

    function handleResize() {
      setScreenWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);

  const mobileMenuHandler = () => {
    if (screenWidth < 769) setMenuVisible((prevState) => !prevState);
  };

  useEffect(() => {
    menuVisible === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
},[menuVisible]) 

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
              <li className={styles.list_item} onClick={mobileMenuHandler}>stories</li>
            </Link>
            <Link href="/features">
              <li className={styles.list_item} onClick={mobileMenuHandler}>features</li>
            </Link>
            <Link href="/pricing">
              <li className={styles.list_item} onClick={mobileMenuHandler}>pricing</li>
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
