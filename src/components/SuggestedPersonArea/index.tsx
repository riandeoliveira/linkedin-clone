import { UserSuggestion } from "components";
import { suggestedPeople } from "contents";
import styles from "./styles.module.scss";

const SuggestedPersonArea = (): JSX.Element => {
  return (
    <aside className={styles.aside}>
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
    </aside>
  );
};

export default SuggestedPersonArea;
