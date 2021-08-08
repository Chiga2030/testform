import {
  useState,
} from 'react';

import styles from './ProductSelectionBlock.module.css';

import classNames from 'classnames';

import ListProductItem from '../ListProductItem/ListProductItem';


const defaultProductList = [
  {
    id: 5,
    product: '5 products',
    price: 80,
    priceForEach: 16,
    discount: 36,
    isSelect: true,
  },
  {
    id: 4,
    product: '4 products',
    price: 72,
    priceForEach: 18,
    discount: 28,
    isSelect: false,
  },
  {
    id: 3,
    product: '3 products',
    price: 60,
    priceForEach: 20,
    discount: 20,
    isSelect: false,
  },
  {
    id: 2,
    product: '2 products',
    price: 44,
    priceForEach: 22,
    discount: 12,
    isSelect: false,
  },
  {
    id: 1,
    product: '1 product',
    price: 24.99,
    isSelect: false,
  },
];


const ProductSelectionBlock = () => {
  const [
    produstsList,
    setProdustsList,
  ] = useState(defaultProductList);

  const onSelect = id => {
    const newProdustsList = produstsList.map(product => {
      const newProduct = {
        ...product,
      };

      if (product.id === id) {
        newProduct.isSelect = true;
      } else {
        newProduct.isSelect = false;
      };

      return newProduct;
    });
    setProdustsList(newProdustsList);
  };


  return (
    <ul className={classNames(
      styles.roundedEdges,
      styles.list,
    )}>
      {produstsList.map(
        item => (
          <ListProductItem
            key={item.id}
            styles={styles}
            id={item.id}
            product={item.product}
            price={item.price}
            priceForEach={item.priceForEach}
            discount={item.discount}
            isSelect={item.isSelect}
            onSelect={onSelect}
          />
        )
      )}
    </ul>
  );
};

export default ProductSelectionBlock;
