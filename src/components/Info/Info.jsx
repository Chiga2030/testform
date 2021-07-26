import classNames from 'classnames';

const Info = ({
  styles,
  ...props
}) => (
  <div className={styles.blockMargins}>
    <h2 className={classNames(
      styles.title,
      styles.infoTitleMargin)
    }>
      Info
    </h2>
    <label>
      <p className={classNames(
        styles.subtitle,
        styles.infoSubtitleMargin,
      )}>
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
