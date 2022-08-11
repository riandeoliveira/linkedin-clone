import Image from "next/image";
import styles from "./styles.module.scss";

interface EducationProps {
  image: string;
  institution: string;
  course: string;
  duration: string;
}

const Education = ({
  image,
  institution,
  course,
  duration,
}: EducationProps): JSX.Element => {
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

export default Education;
