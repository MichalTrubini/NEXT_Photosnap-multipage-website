import Hero from "../hero";
import HeroImage from '../../public/assets/pricing/mobile/hero.jpg';

const PricingModule = () => {
    return (
        <>
            <Hero 
                className='pdg_fix divider'
                src={HeroImage}
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