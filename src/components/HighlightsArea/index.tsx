import FeaturedPost from "components/FeaturedPost";
import featuredPosts from "contents/featured-posts";
import styles from "./styles.module.scss";

const HighlightsArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Destaques</h2>
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
