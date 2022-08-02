import type { IUserPost } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface PostFooterProps extends IUserPost {}

const PostFooter = ({ reactions, comments }: PostFooterProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.reactions}>
        <div className={styles.reactions_container}>
          <Image
            src="/assets/icons/blue-ellipse.svg"
            alt="Ícone de reação do comentário"
            width={16}
            height={16}
          />
          <div className={styles.ellipse}>
            <Image
              src="/assets/icons/green-ellipse.svg"
              alt="Ícone de reação do comentário"
              width={16}
              height={16}
            />
          </div>
          <div className={styles.ellipse}>
            <Image
              src="/assets/icons/red-ellipse.svg"
              alt="Ícone de reação do comentário"
              width={16}
              height={16}
            />
          </div>
        </div>
        <span className={styles.data}>{reactions}</span>
      </div>
      <span className={styles.data}>
        {comments > 1 ? `${comments} comentários` : `${comments} comentário`}
      </span>
    </div>
  );
};

export default PostFooter;
