import PostFooter from "components/PostFooter";
import type { IPost } from "interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface HighlightProps extends IPost {
  title: string;
  content: string;
  post: string;
}

const Highlight = ({
  title,
  content,
  post,
  reactions,
  comments,
}: HighlightProps): JSX.Element => {
  return (
    <Link href="/">
      <a className={styles.post}>
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
      </a>
    </Link>
  );
};

export default Highlight;
