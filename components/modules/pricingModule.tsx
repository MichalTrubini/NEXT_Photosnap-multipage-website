import Hero from "../hero";
import { useEffect, useState } from "react";
import HeroImageMobile from '../../public/assets/pricing/mobile/hero.jpg';
import HeroImageTablet from '../../public/assets/pricing/tablet/hero.jpg';
import HeroImageDesktop from '../../public/assets/pricing/desktop/hero.jpg';

const PricingModule = () => {

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
                alt='hero'
                header='pricing'
                text='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
                noArrow='none'
                none='none'
            />
        </>
    )
}

export default PricingModule;