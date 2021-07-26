import Product from '../Product/Product';

const ProductList = ({
  styles,
  products,
  ...props
}) => (
  <div className={styles.blockMargins}>
    {products.map(
      product => (
        <Product
          styles={styles}
          product={product}
        />
      )
    )}
  </div>
);

export default ProductList;
