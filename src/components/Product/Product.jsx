import classNames from 'classnames';

import DeleteButton from '../DeleteButton/DeleteButton';


const Product = ({
  styles,
  product,
}) => (
  <div className={styles.blockMargins}>
    <div className={classNames(
      styles.titleWrapper,
      styles.productTitleMargin,
    )}>
      <h2 className={styles.title}>
        {product.name}
      </h2>
      {
        product.isToDelete ? <DeleteButton /> : ''
      }
    </div>
    <label>
      <p className={classNames(
        styles.subtitle,
        styles.productSubtitleMargin,
      )}>
        Enter main keyword for the product
      </p>
      <input
        className={styles.input}
        placeholder="for example, sylicon wine cup"
        type="text"
      />
    </label>
    <label>
      <p className={classNames(
        styles.subtitle,
        styles.productSubtitleMargin,
      )}>
        Enter link to the similar product as a reference
      </p>
      <input
        className={styles.input}
        placeholder="https://..."
        type="text"
      />
    </label>
  </div>
);

export default Product;
