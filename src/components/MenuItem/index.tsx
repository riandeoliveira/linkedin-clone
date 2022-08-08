import type { IMenuItem } from "interfaces";
import Link from "next/link";
import styles from "./styles.module.scss";

interface MenuItemProps extends IMenuItem {}

const MenuItem = ({ icon, path, title }: MenuItemProps): JSX.Element => {
  return (
    <li className={`${styles.item} ${path === "/work" ? styles.bar : ""}`}>
      <Link href={path}>
        <a className={styles.link}>
          <div className={styles.icon}>{icon}</div>
          <span className={styles.title}>{title}</span>
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;
