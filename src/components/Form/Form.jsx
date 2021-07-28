import {
  useState,
} from 'react';

import styles from './Form.module.css';

import Basket from '../Basket/Basket';
import AddProductForm from '../AddProductForm/AddProductForm';

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
    // setProducts,
  ] = useState(defaultProducts);

  const [
    price,
    // setPrice,
  ] = useState(defaultPrice);

  const [
    isAddProd,
    // setIsAddProd,
  ] = useState(true);


  return (
    <form className={styles.form}>
      {!isAddProd ?
        <Basket
          styles={styles}
          products={products}
          price={price}
        />
        :
        <AddProductForm />
      }
    </form>
  );
};

export default Form;
