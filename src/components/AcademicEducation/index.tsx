import type { IAcademicEducation } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface AcademicEducationProps extends IAcademicEducation {}

const AcademicEducation = ({
  image,
  institution,
  course,
  duration,
}: AcademicEducationProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={`/assets/icons/${image}.svg`}
          alt="Imagem da instituição de ensino do usuário"
          width={48}
          height={48}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.institution}>{institution}</span>
        <span className={styles.course}>{course}</span>
        <span className={styles.duration}>{duration}</span>
      </div>
    </div>
  );
};

export default AcademicEducation;
