import styles from './Info.module.css';

const Info = () => (
  <>
    <h2 className={styles.title}>
      Info
    </h2>
    <label>
      <p className={styles.subtitle}>
        Enter your email address
      </p>
      <input
        className={styles.input}
        placeholder="team@checkforpatent.com"
        type="email"
      />
    </label>
  </>
);

export default Info;
