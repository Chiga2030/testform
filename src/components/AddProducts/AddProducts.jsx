import classNames from 'classnames';

import styles from './AddProducts.module.css';

const AddProducts = ({
  onAddMoreProd,
  ...props
}) => (
  <div className={classNames(
    props.styles.addMoreProducts,
    props.styles.blockMarginsSmall,
  )}>
    <button
      type="button"
      onClick={() => onAddMoreProd()}
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
  </div>
);

export default AddProducts;
