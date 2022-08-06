import UserLanguage from "components/UserLanguage";
import userLanguages from "contents/user-languages";
import styles from "./styles.module.scss";

const UserLanguagesArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Idiomas</h2>
      <div className={styles.languages}>
        {userLanguages.map(({ language, level }, i, list) => {
          const lastLanguage: number = list.length - 1;
          const isLastLanguage: boolean = lastLanguage === i;

          return (
            <UserLanguage
              language={language}
              level={level}
              isLastLanguage={isLastLanguage}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};

export default UserLanguagesArea;
