import styles from './ProductSelectionBlock.module.css';

import classNames from 'classnames';

const ProductSelectionBlock = () => (
  <ul className={classNames(
    styles.roundedEdges,
    styles.list,
  )}>
    <li className={styles.column}>
      <input
        className={styles.radio}
        name="selectProduct"
        type="radio"
        value="5"
      />
      <div className={styles.description}>
        <p className={styles.title}>5 products for 80 usd / 16$ for each</p>
        <p className={styles.subtitle}>You safe 36% on each patent check</p>
      </div>
    </li>

    <li className={styles.column}>
      <input
        className={styles.radio}
        name="selectProduct"
        type="radio"
        value="4"
      />
      <div className={styles.description}>
        <p className={styles.title}>5 products for 80 usd / 16$ for each</p>
        <p className={styles.subtitle}>You safe 36% on each patent check</p>
      </div>
    </li>

    <li className={styles.column}>
      <input
        className={styles.radio}
        name="selectProduct"
        type="radio"
        value="3"
      />
      <div className={styles.description}>
        <p className={styles.title}>5 products for 80 usd / 16$ for each</p>
        <p className={styles.subtitle}>You safe 36% on each patent check</p>
      </div>
    </li>

    <li className={styles.column}>
      <input
        className={styles.radio}
        name="selectProduct"
        type="radio"
        value="2"
      />
      <div className={styles.description}>
        <p className={styles.title}>5 products for 80 usd / 16$ for each</p>
        <p className={styles.subtitle}>You safe 36% on each patent check</p>
      </div>
    </li>

    <li className={styles.column}>
      <input
        className={styles.radio}
        name="selectProduct"
        type="radio"
        value="1"
      />
      <div className={styles.description}>
        <p className={styles.title}>5 products for 80 usd / 16$ for each</p>
        <p className={styles.subtitle}>You safe 36% on each patent check</p>
      </div>
    </li>
  </ul>
);

export default ProductSelectionBlock;
