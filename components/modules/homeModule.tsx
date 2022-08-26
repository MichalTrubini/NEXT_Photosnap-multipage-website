import Hero from "../hero";
import { useEffect, useState } from "react";
import HeroImageMobile from '../../public/assets/home/mobile/create-and-share.jpg';
import HeroImageTablet from '../../public/assets/home/tablet/create-and-share.jpg';
import HeroImageDesktop from '../../public/assets/home/desktop/create-and-share.jpg';
import styles from './home.module.css'

const HomeModule = () => {

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

    const imageSelector = () => {
        if (screenWidth < 376) return HeroImageMobile;
        if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktop;
        if (screenWidth > 525 && screenWidth < 769) return HeroImageTablet;
        if (screenWidth > 768 ) return HeroImageDesktop;
    }

    return (
        <>
            <Hero 
                className='divider'
                src={imageSelector()}
                alt='create and share'
                header='Create and share your photo stories.'
                text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                cta="get an invite"
                none='none'
                
            />
        </>
    )
}

export default HomeModule;