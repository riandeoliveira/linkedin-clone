import Language from "components/Language";
import languages from "./content";
import styles from "./styles.module.scss";

const Languages = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Idiomas</h2>
      <div className={styles.languages}>
        {languages.map(({ language, level }, i, list) => {
          const lastLanguage: number = list.length - 1;
          const isLastLanguage: boolean = lastLanguage === i;

          return (
            <Language
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

export default Languages;
