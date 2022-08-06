import JobPosition from "components/JobPosition";
import type { IJobExperience } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface JobExperienceProps extends IJobExperience {}

const JobExperience = ({
  image,
  company,
  period,
  positions,
}: JobExperienceProps): JSX.Element => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Image
          src={`/assets/icons/${image}.svg`}
          alt="Imagem da empresa onde o usuário trabalhou"
          width={48}
          height={48}
        />
        <div className={styles.container}>
          <span className={styles.company}>{company}</span>
          <span className={styles.period}>{period}</span>
        </div>
      </div>
      <div className={styles.job_positions}>
        {positions.map(({ job, type, workplace, duration }, i) => (
          <JobPosition
            job={job}
            type={type}
            workplace={workplace}
            duration={duration}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default JobExperience;
