import PostFooter from "components/PostFooter";
import type { IFeaturedPost } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface FeaturedPostProps extends IFeaturedPost {}

const FeaturedPost = ({
  title,
  content,
  post,
  reactions,
  comments,
}: FeaturedPostProps): JSX.Element => {
  return (
    <div className={styles.post}>
      <div className={styles.heading}>
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{content}</span>
      </div>
      <Image
        src={`/assets/icons/${post}.svg`}
        alt="Imagem da postagem do usuário"
        width={236}
        height={152}
        objectFit="cover"
      />
      <div className={styles.footer}>
        <PostFooter reactions={reactions} comments={comments} />
      </div>
    </div>
  );
};

export default FeaturedPost;
