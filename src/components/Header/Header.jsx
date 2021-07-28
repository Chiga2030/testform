import styles from './Header.module.css';

const Header = ({
  title,
  subtitle,
}) => (
  <div className={styles.blockMargins}>
    <h2 className={styles.title}>
      {title}
    </h2>
    <p className={styles.subtitle}>
      {subtitle}
    </p>
  </div>
);

export default Header;
