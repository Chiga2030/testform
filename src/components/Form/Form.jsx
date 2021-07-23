import { useState } from 'react';

import styles from './Form.module.css';

import Info from '../Info/Info';
import ProductList from '../ProductList/ProductList';

const defaultProducts = [
  {
    id: 1,
    name: 'Product 1',
  },
];
const defaultPrice = 24.99;

const Form = () => {
  const [products, setProducts] = useState(defaultProducts);
  const [price, setPrice] = useState(defaultPrice);

  return (
    <form className={styles.form}>
      <Info
        styles={styles}
      />
      <ProductList
        styles={styles}
        products={products}
      />
    </form>
  )
};

export default Form;
