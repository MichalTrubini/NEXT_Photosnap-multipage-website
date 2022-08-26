import Hero from "../hero";
import HeroImageMobile from "../../public/assets/stories/mobile/moon-of-appalacia.jpg";
import HeroImageTablet from "../../public/assets/stories/tablet/moon-of-appalacia.jpg";
import HeroImageDesktop from "../../public/assets/stories/desktop/moon-of-appalacia.jpg";
import styles from "./stories.module.css";
import ScreenDimensions from "../../utils/screenDimensions";

const StoriesModule = () => {
  const screenWidth = ScreenDimensions();

  const imageSelector = () => {
    if (screenWidth < 376) return HeroImageMobile;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktop;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTablet;
    if (screenWidth > 768) return HeroImageDesktop;
  };

  return (
    <>
      <Hero
        src={imageSelector()}
        alt="moon over appalachia"
        subtitle="last month's featured story"
        header="HAZY FULL MOON OF APPALACHIA"
        date="March 2nd 2020"
        author="by John Appleseed"
        text='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        cta="READ THE STORY"
        classNameContent={styles.content}
        classNameImage={styles.image}
      />
    </>
  );
};

export default StoriesModule;
