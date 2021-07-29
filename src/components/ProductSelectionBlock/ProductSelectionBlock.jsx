import {
  useState,
} from 'react';

import styles from './ProductSelectionBlock.module.css';

import classNames from 'classnames';

import ListProductItem from '../ListProductItem/ListProductItem';


const defaultProductList = [
  {
    product: '5 products',
    price: 80,
    priceForEach: 16,
    discount: 36,
  },
  {
    product: '4 products',
    price: 72,
    priceForEach: 18,
    discount: 28,
  },
  {
    product: '3 products',
    price: 60,
    priceForEach: 20,
    discount: 20,
  },
  {
    product: '2 products',
    price: 44,
    priceForEach: 22,
    discount: 12,
  },
  {
    product: '1 product',
    price: 24.99,
  },
];


const ProductSelectionBlock = () => {
  const [
    produstsList,
    // setProdustsList,
  ] = useState(defaultProductList);

  return (
    <ul className={classNames(
      styles.roundedEdges,
      styles.list,
    )}>
      {produstsList.map(
        item => (
          <ListProductItem
            styles={styles}
            product={item.product}
            price={item.price}
            priceForEach={item.priceForEach}
            discount={item.discount}
          />
        )
      )}
    </ul>
  );
};

export default ProductSelectionBlock;
