import classNames from 'classnames';

import styles from './ProductSelectionBlock.module.css';

import ListProductItem from '../ListProductItem/ListProductItem';


const ProductSelectionBlock = ({
  produstsList,
  setProdustsList,
  ...props
}) => {
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
      styles.list,
      props.blockStyle,
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
