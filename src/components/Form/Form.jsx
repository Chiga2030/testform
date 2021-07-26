import { useState } from 'react';

import styles from './Form.module.css';

import Info from '../Info/Info';
import ProductList from '../ProductList/ProductList';
import AddProducts from '../AddProducts/AddProducts';
import SubmitButton from '../SubmitButton/SubmitButton';
import SecurePayment from '../SecurePayment/SecurePayment';

const defaultProducts = [
  {
    id: 1,
    name: 'Product 1',
  },
];
const defaultPrice = 24.99;

const Form = () => {
  const [
    products,
    setProducts
  ] = useState(defaultProducts);

  const [
    price,
    setPrice
  ] = useState(defaultPrice);


  return (
    <form className={styles.form}>
      <Info
        styles={styles}
      />
      <ProductList
        styles={styles}
        products={products}
      />
      <AddProducts
        styles={styles}
      />
      <SubmitButton
        styles={styles}
        value={`Submit and Pay ${price} USD`}
        bgColor="success"
      />
      <SecurePayment />
    </form>
  )
};

export default Form;
