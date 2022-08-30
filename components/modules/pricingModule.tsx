import Hero from "../hero";
import HeroImageMobile from "../../public/assets/pricing/mobile/hero.jpg";
import HeroImageTablet from "../../public/assets/pricing/tablet/hero.jpg";
import HeroImageDesktop from "../../public/assets/pricing/desktop/hero.jpg";
import ScreenDimensions from "../../utils/screenDimensions";
import Beta from "../beta";
import styles from "./pricing.module.css";
import PricingCardTemplate from "../pricingCardTemplate";
import { useState } from "react";

const PricingModule = () => {
  const screenWidth = ScreenDimensions();

  const imageSelector = () => {
    if (screenWidth < 376) return HeroImageMobile;
    if (screenWidth > 375 && screenWidth < 525) return HeroImageDesktop;
    if (screenWidth > 525 && screenWidth < 769) return HeroImageTablet;
    if (screenWidth > 768) return HeroImageDesktop;
  };

  const [frequency, setFrequency] = useState(true);

  const frequencyHandler = () => {
    setFrequency((prevState) => !prevState);
  };

  const pricingData = [
    {
      id: 1,
      type: "Basic",
      text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      priceMonthly: "19.00",
      priceYearly: "190.00",
      frequencyMonthly: "per month",
      frequencyYearly: "per year",
      classNameButton: "button_dark",
      classNameCard: "card_basic",
      classNameColor: "dark",
      classNameText: "text_dark",
    },
    {
      id: 2,
      type: "Pro",
      text: "More advanced features available. Recommended for photography veterans and professionals.",
      priceMonthly: "39.00",
      priceYearly: "390.00",
      frequencyMonthly: "per month",
      frequencyYearly: "per year",
      classNameButton: "button_light",
      classNameCard: "card_pro",
      classNameColor: "light",
      classNameText: "text_light",
    },
    {
      id: 3,
      type: "Business",
      text: "Additional features available such as more detailed metrics. Recommended for business owners.",
      priceMonthly: "99.00",
      priceYearly: "990.00",
      frequencyMonthly: "per month",
      frequencyYearly: "per year",
      classNameButton: "button_dark",
      classNameCard: "card_business",
      classNameColor: "dark",
      classNameText: "text_dark",
    },
  ];

  return (
    <>
      <Hero
        classNameContent="divider"
        src={imageSelector()}
        alt="hero"
        header="pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        noArrow="none"
        none="none"
      />
      <div className={styles.pricing}>
        <div className={styles.container}>
          <p
            className={
              frequency ? `${styles.text_clicked} ${styles.text}` : styles.text
            }
          >
            Monthly
          </p>
          <div className={styles.toggler} onClick={frequencyHandler}>
            <div
              className={
                frequency
                  ? `${styles.toggle_left} ${styles.toggle}`
                  : `${styles.toggle_right} ${styles.toggle}`
              }
            ></div>
          </div>
          <p
            className={
              !frequency ? `${styles.text_clicked} ${styles.text}` : styles.text
            }
          >
            Yearly
          </p>
        </div>
        <div className={styles.cards}>
          {pricingData.map((card) => (
            <PricingCardTemplate
              key={card.id}
              header={card.type}
              text={card.text}
              price={frequency ? `$${card.priceMonthly}` : `$${card.priceYearly}`}
              frequency={frequency ? `${card.frequencyMonthly}` : `${card.frequencyYearly}`}
              classNameCard={styles[card.classNameCard]}
              classNameButton={styles[card.classNameButton]}
              classNameColor={styles[card.classNameColor]}
              classNameText={styles[card.classNameText]}
            />
          ))}
        </div>
      </div>
      <Beta />
    </>
  );
};

export default PricingModule;
