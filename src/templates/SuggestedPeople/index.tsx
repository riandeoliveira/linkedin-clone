import UserSuggestion from "components/UserSuggestion";
import suggestedPeople from "contents/suggested-people";
import styles from "./styles.module.scss";

const SuggestedPersonArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>As pessoas também viram</h2>
      <ul className={styles.list}>
        {suggestedPeople.map(({ fullname, career, avatar }, i) => (
          <UserSuggestion
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
