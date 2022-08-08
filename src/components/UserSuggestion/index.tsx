import type { IUserSuggestion } from "interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

interface UserSuggestionProps extends IUserSuggestion {
  option: "Enviar mensagem" | "Conectar";
}

const UserSuggestion = ({
  avatar,
  fullname,
  career,
  option,
}: UserSuggestionProps): JSX.Element => {
  const buttonStyles: string =
    option === "Enviar mensagem" ? styles.primary : styles.secondary;

  return (
    <li className={styles.item}>
      <div className={styles.avatar}>
        <Image
          src={`/assets/icons/${avatar}.svg`}
          alt="Imagem de perfil de usuário recomendado"
          width={48}
          height={48}
        />
      </div>
      <div className={styles.item_container}>
        <div className={styles.info}>
          <span className={styles.fullname}>{fullname}</span>
          <span className={styles.career}>{career}</span>
        </div>
        <button type="button" className={buttonStyles}>
          {option}
        </button>
      </div>
    </li>
  );
};

export default UserSuggestion;
