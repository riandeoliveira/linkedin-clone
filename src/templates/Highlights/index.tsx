import Highlight from "components/Highlight";
import highlights from "./content.json";
import styles from "./styles.module.scss";

const Highlights = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Destaques</h2>
      <div className={styles.highlights}>
        {highlights.map(
          ({ title, content, post, reactions, comments }, i) => (
            <Highlight
              title={title}
              content={content}
              post={post}
              reactions={reactions}
              comments={comments}
              key={i}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Highlights;
