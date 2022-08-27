import Hero from "../hero";
import HeroImageMobileOne from "../../public/assets/home/mobile/create-and-share.jpg";
import HeroImageTabletOne from "../../public/assets/home/tablet/create-and-share.jpg";
import HeroImageDesktopOne from "../../public/assets/home/desktop/create-and-share.jpg";
import HeroImageMobileTwo from "../../public/assets/home/mobile/beautiful-stories.jpg";
import HeroImageTabletTwo from "../../public/assets/home/tablet/beautiful-stories.jpg";
import HeroImageDesktopTwo from "../../public/assets/home/desktop/beautiful-stories.jpg";
import HeroImageMobileThree from "../../public/assets/home/mobile/designed-for-everyone.jpg";
import HeroImageTabletThree from "../../public/assets/home/tablet/designed-for-everyone.jpg";
import HeroImageDesktopThree from "../../public/assets/home/desktop/designed-for-everyone.jpg";
import ScreenDimensions from "../../utils/screenDimensions";

import styles from "./home.module.css";
import StoryTemplate from "../storyTemplate";

const HomeModule = () => {
  const screenWidth = ScreenDimensions();

  const imageSelectorOne = () => {
    if (screenWidth < 376) return HeroImageMobileOne;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktopOne;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTabletOne;
    if (screenWidth > 768) return HeroImageDesktopOne;
  };

  const imageSelectorTwo = () => {
    if (screenWidth < 376) return HeroImageMobileTwo;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktopTwo;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTabletTwo;
    if (screenWidth > 768) return HeroImageDesktopTwo;
  };

  const imageSelectorThree = () => {
    if (screenWidth < 376) return HeroImageMobileThree;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktopThree;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTabletThree;
    if (screenWidth > 768) return HeroImageDesktopThree;
  };

  const data = [
    {
      id:1,
      header: "The Mountains",
      author: "John Appleseed",
      mobile: "/assets/stories/mobile/mountains.jpg",
      desktop: "/assets/stories/desktop/mountains.jpg"
    },
    {
      id:2,
      header: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      mobile: "/assets/stories/mobile/cityscapes.jpg",
      desktop: "/assets/stories/desktop/cityscapes.jpg"
    },
    {
      id:3,
      header: "18 Days Voyage",
      author: "Alexei Borodin",
      mobile: "/assets/stories/mobile/18-days-voyage.jpg",
      desktop: "/assets/stories/desktop/18-days-voyage.jpg"
    },
    {
      id:4,
      header: "Architecturals",
      author: "Samantha Brooke",
      mobile: "/assets/stories/mobile/architecturals.jpg",
      desktop: "/assets/stories/desktop/architecturals.jpg"
    }
  ];

  return (
    <>
      <Hero
        classNameContent="divider"
        src={imageSelectorOne()}
        alt="create and share"
        header="Create and share your photo stories."
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        cta="get an invite"
        none="none"
      />
      <Hero
        classNameHero={`${styles.mrg_fix} ${styles.reverse}`}
        classNameContent={styles.content}
        classNameHeader={styles.header}
        classNameText={styles.text}
        classNameCtaText={styles.cta_text}
        classNameArrow={styles.arrow}
        src={imageSelectorTwo()}
        alt="beautiful stories"
        header="BEAUTIFUL STORIES EVERY TIME"
        text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        cta="view the stories"
        none="none"
        link="stories"
      />
      <Hero
        classNameHero={styles.mrg_fix}
        classNameContent={styles.content}
        classNameHeader={styles.header}
        classNameText={styles.text}
        classNameCtaText={styles.cta_text}
        classNameArrow={styles.arrow}
        src={imageSelectorThree()}
        alt="designed for everyone"
        header="DESIGNED FOR EVERYONE"
        text="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        cta="view the stories"
        none="none"
        link="stories"
      />
      <div className={styles.grid}>
        {data.map((image) => (
          <StoryTemplate
            key={image.id}
            header={image.header}
            author={image.author}
            src={screenWidth < 376 && image.mobile || screenWidth > 375 && image.desktop}
            alt={image.header}
          />
        ))}
      </div>
    </>
  );
};

export default HomeModule;
