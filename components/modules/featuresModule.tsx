import Hero from "../hero";
import HeroImageMobile from "../../public/assets/features/mobile/hero.jpg";
import HeroImageTablet from "../../public/assets/features/tablet/hero.jpg";
import HeroImageDesktop from "../../public/assets/features/desktop/hero.jpg";
import ScreenDimensions from "../../utils/screenDimensions";

import responsive from "../../public/assets/features/desktop/responsive.svg";
import noLimit from "../../public/assets/features/desktop/no-limit.svg";
import embded from "../../public/assets/features/desktop/embed.svg";
import domain from "../../public/assets/features/desktop/custom-domain.svg";
import exposure from "../../public/assets/features/desktop/boost-exposure.svg";
import drag from "../../public/assets/features/desktop/drag-drop.svg";
import FeatureTemplate from "../featureTemplate";

import styles from "./features.module.css";
import Beta from "../beta";

const FeaturesModule = () => {
  const screenWidth = ScreenDimensions();

  const imageSelector = () => {
    if (screenWidth < 376) return HeroImageMobile;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktop;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTablet;
    if (screenWidth > 768) return HeroImageDesktop;
  };

  const featuresData = [
    {
      id: 1,
      src: responsive,
      header: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      id: 2,
      src: noLimit,
      header: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      id: 3,
      src: embded,
      header: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    },
    {
      id: 4,
      src: domain,
      header: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      id: 5,
      src: exposure,
      header: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      id: 6,
      src: drag,
      header: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];

  return (
    <>
      <Hero
        classNameContent="divider"
        src={imageSelector()}
        alt="hero"
        header="Features"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        noArrow="none"
        none="none"
      />
      <div className={styles.features}>
        {featuresData.map((feature) => (
          <FeatureTemplate
            key={feature.id}
            src={feature.src}
            alt={feature.header}
            header={feature.header}
            text={feature.text}
          />
        ))}
      </div>
      <Beta />
    </>
  );
};

export default FeaturesModule;
