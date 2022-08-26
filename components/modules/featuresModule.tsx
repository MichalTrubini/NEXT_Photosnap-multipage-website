import Hero from "../hero";
import HeroImageMobile from '../../public/assets/features/mobile/hero.jpg';
import HeroImageTablet from '../../public/assets/features/tablet/hero.jpg';
import HeroImageDesktop from '../../public/assets/features/desktop/hero.jpg';
import { useEffect, useState } from "react";

const FeaturesModule = () => {

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
                classNameContent='divider'
                src={imageSelector()}
                alt='hero'
                header='Features'
                text='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
                noArrow='none'
                none='none'
            />
        </>
    )
}

export default FeaturesModule;