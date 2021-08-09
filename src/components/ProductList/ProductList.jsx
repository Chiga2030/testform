import Product from '../Product/Product';

const ProductList = ({
  styles,
  products,
}) => (
  <div className={styles.blockMargins}>
    {products.map(
      product => (
        <Product
          key={product.id}
          styles={styles}
          product={product}
        />
      )
    )}
  </div>
);

export default ProductList;
