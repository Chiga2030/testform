import classNames from 'classnames';

import Product from '../Product/Product';

const ProductList = ({
  styles,
  products,
  onDeleteProd,
}) => (
  <div className={classNames(
    styles.blockMargins,
  )}>
    {products.map(
      product => (
        <Product
          key={product.id}
          styles={styles}
          product={product}
          onDeleteProd={onDeleteProd}
        />
      )
    )}
  </div>
);

export default ProductList;
