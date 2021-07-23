const Info = ({
  styles,
  ...props
}) => (
  <div className={styles.blockMargins}>
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
  </div>
);

export default Info;
