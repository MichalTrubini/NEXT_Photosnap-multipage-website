import Hero from "../hero";
import HeroImageMobile from '../../public/assets/pricing/mobile/hero.jpg';
import HeroImageTablet from '../../public/assets/pricing/tablet/hero.jpg';
import HeroImageDesktop from '../../public/assets/pricing/desktop/hero.jpg';
import ScreenDimensions from "../../utils/screenDimensions";
import Beta from "../beta";

const PricingModule = () => {

    const screenWidth = ScreenDimensions();

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
                header='pricing'
                text='Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
                noArrow='none'
                none='none'
            />
            <Beta />
        </>
    )
}

export default PricingModule;