import Hero from "../hero";
import HeroImage from '../../public/assets/stories/mobile/moon-of-appalacia.jpg';

const StoriesModule = () => {
    return (
        <>
            <Hero 
                src={HeroImage}
                alt='moon over appalachia'
                subtitle="last month's featured story"
                header='HAZY FULL MOON OF APPALACHIA'
                date="March 2nd 2020"
                author="by John Appleseed"
                text='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
                cta="READ THE STORY"
            />
        </>
    )
}

export default StoriesModule;