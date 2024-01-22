import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Prise en main du Frontend",
    Svg: require("@site/static/img/undraw_front.svg").default,
    description: (
      <>
        Explorez la conception du frontend avec Harmonia, un framework utilisant
        React coté frontend, et découvrez comment l'utiliser de manière
        appropriée.
      </>
    ),
  },
  {
    title: "Liaison Frontend/Backend",
    Svg: require("@site/static/img/undraw_api.svg").default,
    description: (
      <>
        Facilitez la communication entre les parties Frontend et Backend de
        notre application Harmonia en utilisant une API REST.
      </>
    ),
  },
  {
    title: "Prise en main Backend",
    Svg: require("@site/static/img/undraw_back.svg").default,
    description: (
      <>
        Explorez la conception du backend avec Harmonia, basé sur le micro
        framework Express, et découvrez comment l'utiliser de manière adéquate.
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
