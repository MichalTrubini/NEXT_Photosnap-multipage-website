import Hero from "../hero";
import HeroImage from '../../public/assets/features/mobile/hero.jpg';

const FeaturesModule = () => {

    const imageSelector = () => {
        return HeroImage
    }

    return (
        <>
            <Hero 
                className='pdg_fix divider'
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