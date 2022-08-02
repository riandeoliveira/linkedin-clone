import { FeaturedPost } from "components";
import { featuredPosts } from "contents";
import styles from "./styles.module.scss";

const HighlightsArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <span className={styles.title}>Destaques</span>
      <div className={styles.highlights}>
        {featuredPosts.map(
          ({ title, content, post, reactions, comments }, i) => (
            <FeaturedPost
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

export default HighlightsArea;
