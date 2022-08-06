import ActivityPost from "components/ActivityPost";
import activityPosts from "contents/activity-posts";
import styles from "./styles.module.scss";

const ActivitiesArea = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Atividades</h2>
          <span className={styles.followers}>??? seguidores</span>
        </div>
        <div className={styles.activities}>
          {activityPosts.map(
            ({ author, content, post, date, reactions, comments }, i, list) => {
              const lastPost: number = list.length - 1;
              const isLastPost: boolean = lastPost === i;

              return (
                <ActivityPost
                  author={author}
                  content={content}
                  post={post}
                  date={date}
                  reactions={reactions}
                  comments={comments}
                  isLastPost={isLastPost}
                  key={i}
                />
              );
            }
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>Exibir todas as atividades</button>
      </div>
    </section>
  );
};

export default ActivitiesArea;
