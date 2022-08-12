import Experience from "components/Experience";
import experiences from "./content.json";
import styles from "./styles.module.scss";

const Experiences = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Experiências</h2>
      <div className={styles.experiences}>
        {experiences.map(({ company, period, image, positions }, i) => (
          <Experience
            company={company}
            period={period}
            image={image}
            positions={positions}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
