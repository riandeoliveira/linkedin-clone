import type { IUserLanguage } from "interfaces";
import styles from "./styles.module.scss";

interface UserLanguageProps extends IUserLanguage {
  isLastLanguage: boolean;
}

const UserLanguage = ({ language, level, isLastLanguage }: UserLanguageProps): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.language}>{language}</span>
        <span className={styles.level}>{level}</span>
      </div>
      {!isLastLanguage && <hr className={styles.bar} />}
    </>
  );
};

export default UserLanguage;
