import UserSuggestion from "components/UserSuggestion";
import suggestedConnections from "contents/suggested-connections";
import styles from "./styles.module.scss";

const SuggestedConnectionsArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Pessoas que talvez você conheça</h2>
      <ul className={styles.list}>
        {suggestedConnections.map(({ fullname, career, avatar }, i) => (
          <UserSuggestion
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

export default SuggestedConnectionsArea;
