import Suggestion from "components/Suggestion";
import suggestions from "./content.json";
import styles from "./styles.module.scss";

const SuggestedPeople = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Pessoas que talvez você conheça</h2>
      <ul className={styles.list}>
        {suggestions.map(({ fullname, career, avatar }, i) => (
          <Suggestion
            fullname={fullname}
            career={career}
            avatar={avatar}
            option="Conectar"
            key={i}
          />
        ))}
      </ul>
    </section>
  );
};

export default SuggestedPeople;
