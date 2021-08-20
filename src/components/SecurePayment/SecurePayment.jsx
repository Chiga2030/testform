import styles from './SecurePayment.module.css';

import lock from './img/lock.svg';

const SecurePayment = () => (
  <div className={styles.wrapper}>
    <img
      src={lock}
      alt=""
      className={styles.imgLabel}
    />
    <span className={styles.textField}>
      Secure payment with Stripe
    </span>
  </div>
);

export default SecurePayment;
