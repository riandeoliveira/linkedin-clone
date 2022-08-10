import type { ILanguage } from "interfaces";
import styles from "./styles.module.scss";

interface LanguageProps extends ILanguage {
  isLastLanguage: boolean;
}

const Language = ({
  language,
  level,
  isLastLanguage,
}: LanguageProps): JSX.Element => {
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

export default Language;
