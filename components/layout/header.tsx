import styles from './header.module.css';
import logo from '../../public/assets/shared/desktop/logo.svg';
import hamburger from '../../public/assets/shared/mobile/menu.svg';

import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <Image src={logo} alt='photosnap' />
            </div>
            <div>
                <Image src={hamburger} alt='menu' />
            </div>
        </header>
    )
}

export default Header;