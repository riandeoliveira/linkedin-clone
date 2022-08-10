import MenuItem from "components/MenuItem";
import Image from "next/image";
import menuItems from "./content";
import styles from "./styles.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <Image
              src="/assets/icons/linkedin.svg"
              alt="Logo branca do LinkedIn"
              width={34}
              height={34}
            />
            <div className={styles.input_container}>
              <div className={styles.search_icon}>
                <Image
                  src="/assets/icons/search.svg"
                  alt=""
                  width={17.5}
                  height={17.5}
                />
              </div>
              <input
                type="text"
                placeholder="Pesquisar"
                className={styles.input}
              />
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {/* {menuItems.map(({ title, path, icon }, i) => (
                <MenuItem title={title} path={path} icon={icon} key={i} />
              ))} */}
              {menuItems.map(({ title, path, icon }, i) => (
                <MenuItem title={title} path={path} icon={icon} key={i} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
