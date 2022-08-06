import JobExperience from "components/JobExperience";
import jobExperiences from "contents/job-experiences";
import styles from "./styles.module.scss";

const ExperiencesArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Experiências</h2>
      <div className={styles.experiences}>
        {jobExperiences.map(({ company, period, image, positions }, i) => (
          <JobExperience
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

export default ExperiencesArea;
