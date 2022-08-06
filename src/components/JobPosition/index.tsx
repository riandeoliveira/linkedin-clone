import type { IJobPosition } from "interfaces";
import styles from "./styles.module.scss";

interface JobPositionProps extends IJobPosition {}

const JobPosition = ({
  job,
  type,
  duration,
  workplace,
}: JobPositionProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <div className={styles.circle}></div>
        <hr className={styles.bar} />
      </div>
      <div className={styles.content}>
        <span className={styles.job}>{job}</span>
        <span className={styles.type}>{type}</span>
        <span className={styles.duration}>{duration}</span>
        <span className={styles.workplace}>{workplace}</span>
      </div>
    </div>
  );
};

export default JobPosition;
