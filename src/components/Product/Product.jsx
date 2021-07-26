import classNames from 'classnames';

const Product = ({
  styles,
  product,
  ...props
}) => (
  <div className={styles.blockMargins}>
    <h2 className={classNames(
      styles.title,
      styles.productTitleMargin,
    )}>
      {product.name}
    </h2>
    <label>
      <p className={styles.subtitle}>
        Enter main keyword for the product
      </p>
      <input
        className={styles.input}
        placeholder="for example, sylicon wine cup"
        type="text"
      />
    </label>
    <label>
      <p className={styles.subtitle}>
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
