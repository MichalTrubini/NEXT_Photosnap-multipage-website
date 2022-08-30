import styles from "./comparison.module.css";
import check from "../public/assets/pricing/desktop/check.svg";
import Image from "next/image";

const Comparison = () => {

  const comparisonData = [
    {
      id: 1,
      feature: "unlimited story posting",
      basic: true,
      pro: true,
      business: true,
    },
    {
      id: 2,
      feature: "unlimited photo upload",
      basic: true,
      pro: true,
      business: true,
    },
    {
      id: 3,
      feature: "embedding custom content",
      basic: false,
      pro: true,
      business: true,
    },
    {
      id: 4,
      feature: "customize metadata",
      basic: false,
      pro: true,
      business: true,
    },
    {
      id: 5,
      feature: "advanced metric",
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 6,
      feature: "photo downloads",
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 7,
      feature: "search engine indexing",
      basic: false,
      pro: false,
      business: true,
    },
    {
      id: 8,
      feature: "custom analytics",
      basic: false,
      pro: false,
      business: true,
    },
  ];

  return (
    <div className={styles.comparison}>
      <h2 className={styles.header}>Compare</h2>
      <div className={styles.table}>
        <div className={styles.row_main}>
          <h3 className={`${styles.title} ${styles.title_main}`}>the features</h3>
          <p className={`${styles.container} ${styles.container_main}`}>
              <span className={styles.type}>basic</span>
              <span className={styles.type}>pro</span>
              <span className={styles.type}>business</span>
            </p>
        </div>
        {comparisonData.map((feature) => (
          <div className={styles.row} key={feature.id}>
            <h3 className={styles.title}>{feature.feature}</h3>
            <p className={`${styles.container} ${styles.container_mobile}`}>
              <span className={styles.type}>basic</span>
              <span className={styles.type}>pro</span>
              <span className={styles.type}>business</span>
            </p>
            <p className={styles.container}>
              <span className={`${styles.type} ${styles.check}`}>
                {feature.basic && <Image src={check} alt="check" />}
              </span>
              <span className={`${styles.type} ${styles.check}`}>
                {feature.pro && <Image src={check} alt="check" />}
              </span>
              <span className={`${styles.type} ${styles.check}`}>
                {feature.business && <Image src={check} alt="check" />}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
