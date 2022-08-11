import Suggestion from "components/Suggestion";
import suggestions from "./content.json";
import styles from "./styles.module.scss";

const SuggestedPersonArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>As pessoas também viram</h2>
      <ul className={styles.list}>
        {suggestions.map(({ fullname, career, avatar }, i) => (
          <Suggestion
            fullname={fullname}
            career={career}
            avatar={avatar}
            option="Enviar mensagem"
            key={i}
          />
        ))}
      </ul>
    </section>
  );
};

export default SuggestedPersonArea;
