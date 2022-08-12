import Education from "components/Education";
import educations from "./content.json";
import styles from "./styles.module.scss";

const Educations = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Formação acadêmica</h2>
      <div className={styles.educations}>
        {educations.map(({ institution, course, duration, image }, i) => (
          <Education
            institution={institution}
            course={course}
            duration={duration}
            image={image}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Educations;
