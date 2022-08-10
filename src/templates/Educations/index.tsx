import AcademicEducation from "components/AcademicEducation";
import academicEducations from "contents/academic-educations";
import styles from "./styles.module.scss";

const Educations = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Formação acadêmica</h2>
      <div className={styles.educations}>
        {academicEducations.map(
          ({ institution, course, duration, image }, i) => (
            <AcademicEducation
              institution={institution}
              course={course}
              duration={duration}
              image={image}
              key={i}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Educations;
