import classNames from 'classnames';

import styles from './AddProducts.module.css';

const AddProducts = props => (
  <>
    <button
      type="button"
      className={classNames(
        styles.button,
        props.styles.addProductButtonMargin,
      )}
    >
      Add more products
    </button>
    <p className={props.styles.subtitle}>
      We offer discount up to 36% for multiple checks
    </p>
  </>
);

export default AddProducts;
