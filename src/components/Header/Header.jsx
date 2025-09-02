import styles from './Header.module.css';

export default function Header({ title, content, onClick }) {
  return (
    <header className={styles.header} onClick={onClick}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>
          <a href="#" className={styles.headerLogoLink} rel="noopener noreferer">
            <svg className={styles.headerLogoIcon} width="63" height="60">
              <use href="/src/assets/icon-logo.svg"></use>
            </svg>
          </a>
        </div>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <li className={styles.headerNavItem}>
              <a href="#" target="_blank" rel="noopener noreferer">
                Про нас
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#" target="_blank" rel="noopener noreferer">
                Каталог Будинків
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#" target="_blank" rel="noopener noreferer">
                Донати
              </a>
            </li>
            <li className={styles.headerNavItem}>
              <a href="#" target="_blank" rel="noopener noreferer">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.headerBtnWrapper}>
          <button type="button" name="btnChooseHouse" id={styles.btnChooseHouse}>
            Обрати дім
          </button>
          <button type="button" name="btnMakeOrder" id={styles.btnMakeOrder}>
            Залишити заявку
          </button>
        </div>
      </div>
    </header>
  );
}
