import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Prise en main du Frontend",
    Svg: require("@site/static/img/undraw_front.svg").default,
    description: (
      <>
        Nous allons voir comment le frontend (REACT) et conçu et comment
        l'utiliser correctement.
      </>
    ),
  },
  {
    title: "Liaison Frontend/Backend",
    Svg: require("@site/static/img/undraw_api.svg").default,
    description: (
      <>
        Nous allons faire communiquer nos deux parties (Frontend/Backend) via
        une API afin de pouvoir utiliser notre application.
      </>
    ),
  },
  {
    title: "Prise en main Backend",
    Svg: require("@site/static/img/undraw_back.svg").default,
    description: (
      <>
        Nous allons voir comment le backend (Express) et conçu et comment
        l'utiliser correctement.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
