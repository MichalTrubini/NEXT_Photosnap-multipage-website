import Hero from "../hero";
import HeroImageMobile from "../../public/assets/stories/mobile/moon-of-appalacia.jpg";
import HeroImageTablet from "../../public/assets/stories/tablet/moon-of-appalacia.jpg";
import HeroImageDesktop from "../../public/assets/stories/desktop/moon-of-appalacia.jpg";
import styles from "./stories.module.css";
import ScreenDimensions from "../../utils/screenDimensions";
import StoryTemplate from "../storyTemplate";

const StoriesModule = () => {
  const screenWidth = ScreenDimensions();

  const imageSelector = () => {
    if (screenWidth < 376) return HeroImageMobile;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktop;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTablet;
    if (screenWidth > 768) return HeroImageDesktop;
  };

  const data = [
    {
      id:1,
      date:'April 16th 2020',
      header: "The Mountains",
      author: "John Appleseed",
      mobile: "/assets/stories/mobile/mountains.jpg",
      desktop: "/assets/stories/desktop/mountains.jpg"
    },
    {
      id:2,
      date:'April 16th 2020',
      header: "Sunset Cityscapes",
      author: "Benjamin Cruz",
      mobile: "/assets/stories/mobile/cityscapes.jpg",
      desktop: "/assets/stories/desktop/cityscapes.jpg"
    },
    {
      id:3,
      date:'April 16th 2020',
      header: "18 Days Voyage",
      author: "Alexei Borodin",
      mobile: "/assets/stories/mobile/18-days-voyage.jpg",
      desktop: "/assets/stories/desktop/18-days-voyage.jpg"
    },
    {
      id:4,
      date:'April 16th 2020',
      header: "Architecturals",
      author: "Samantha Brooke",
      mobile: "/assets/stories/mobile/architecturals.jpg",
      desktop: "/assets/stories/desktop/architecturals.jpg"
    },
    {
      id:5,
      date:'April 16th 2020',
      header: "World Tour 2019",
      author: "Timothy Wagner",
      mobile: "/assets/stories/mobile/world-tour.jpg",
      desktop: "/assets/stories/desktop/world-tour.jpg"
    },
    {
      id:6,
      date:'April 16th 2020',
      header: "Unforeseen Corners",
      author: "William Malcolm",
      mobile: "/assets/stories/mobile/unforeseen-corners.jpg",
      desktop: "/assets/stories/desktop/unforeseen-corners.jpg"
    },
    {
      id:7,
      date:'April 16th 2020',
      header: "King on Africa: Part II",
      author: "Tim Hillenburg",
      mobile: "/assets/stories/mobile/king-on-africa.jpg",
      desktop: "/assets/stories/desktop/king-on-africa.jpg"
    },
    {
      id:8,
      date:'April 16th 2020',
      header: "The Trip to Nowhere",
      author: "Felicia Rourke",
      mobile: "/assets/stories/mobile/trip-to-nowhere.jpg",
      desktop: "/assets/stories/desktop/trip-to-nowhere.jpg"
    },
    {
      id:9,
      date:'April 16th 2020',
      header: "Rage of The Sea",
      author: "Mohammed Abdul",
      mobile: "/assets/stories/mobile/rage-of-the-sea.jpg",
      desktop: "/assets/stories/desktop/rage-of-the-sea.jpg"
    },
    {
      id:10,
      date:'April 16th 2020',
      header: "Running Free",
      author: "Michelle",
      mobile: "/assets/stories/mobile/running-free.jpg",
      desktop: "/assets/stories/desktop/running-free.jpg"
    },
    {
      id:11,
      date:'April 16th 2020',
      header: "Behind the Waves",
      author: "Lamarr Wilson",
      mobile: "/assets/stories/mobile/behind-the-waves.jpg",
      desktop: "/assets/stories/desktop/behind-the-waves.jpg"
    },
    {
      id:12,
      date:'April 16th 2020',
      header: "Calm Waters",
      author: "Samantha Brooke",
      mobile: "/assets/stories/mobile/calm-waters.jpg",
      desktop: "/assets/stories/desktop/calm-waters.jpg"
    },
    {
      id:13,
      date:'April 16th 2020',
      header: "The Milky Way",
      author: "Benjamin Cruz",
      mobile: "/assets/stories/mobile/milky-way.jpg",
      desktop: "/assets/stories/desktop/milky-way.jpg"
    },
    {
      id:14,
      date:'April 16th 2020',
      header: "Night at The Dark Forest",
      author: "Mohammed Abdul",
      mobile: "/assets/stories/mobile/dark-forest.jpg",
      desktop: "/assets/stories/desktop/dark-forest.jpg"
    },
    {
      id:15,
      date:'April 16th 2020',
      header: "Somwarpet’s Beauty",
      author: "Michelle",
      mobile: "/assets/stories/mobile/somwarpet.jpg",
      desktop: "/assets/stories/desktop/somwarpet.jpg"
    },
    {
      id:16,
      date:'April 16th 2020',
      header: "Land of Dreams",
      author: "William Malcolm",
      mobile: "/assets/stories/mobile/land-of-dreams.jpg",
      desktop: "/assets/stories/desktop/land-of-dreams.jpg"
    }
  ];

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
      <div className={styles.grid}>
        {data.map((image) => (
          <StoryTemplate
            key={image.id}
            date={image.date}
            header={image.header}
            author={image.author}
            src={
              (screenWidth < 376 && image.mobile) ||
              (screenWidth > 375 && image.desktop)
            }
            alt={image.header}
          />
        ))}
      </div>
    </>
  );
};

export default StoriesModule;
