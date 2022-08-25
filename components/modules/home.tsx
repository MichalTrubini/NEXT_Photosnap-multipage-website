import Hero from "../hero";
import HeroImage from '../../public/assets/home/mobile/create-and-share.jpg';

const HomePage = () => {
    return (
        <>
            <Hero 
                className='pdg_fix divider'
                src={HeroImage}
                alt='create and share'
                header='Create and share your photo stories.'
                text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
                cta="get an invite"
                none='none'
            />
        </>
    )
}

export default HomePage;