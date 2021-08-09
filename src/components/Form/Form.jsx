import {
  useState,
} from 'react';

import {
  defaultProductList,
  defaultProducts,
  defaultPrice,
} from './defaultStore';

import styles from './Form.module.css';

import Basket from '../Basket/Basket';
import AddProductForm from '../AddProductForm/AddProductForm';


const Form = () => {
  const addProduts = count => {
    const newProducts = [];

    for (let index = 1; index <= count; index++) {
      newProducts.push({
        id: index,
        name: `Product ${index}`,
      });
    }

    setProducts(newProducts);
  };

  const [
    products,
    setProducts,
  ] = useState(defaultProducts);

  const [
    price,
    setPrice,
  ] = useState(defaultPrice);

  const [
    isAddProd,
    setIsAddProd,
  ] = useState(false);

  const onAddMoreProd = () => setIsAddProd(!isAddProd);

  const [
    productsList,
    setProductsList,
  ] = useState(defaultProductList);

  const onSubmitMoreProd = () => {
    const newProductsList = productsList.filter(
      product => !!product.isSelect
    );

    setPrice(newProductsList[0].price);
    addProduts(newProductsList[0].id);
    setIsAddProd(false);
  };


  return (
    <form
      className={styles.form}
    >
      {!isAddProd ?
        <Basket
          styles={styles}
          products={products}
          price={price}
          onAddMoreProd={onAddMoreProd}
          productCount={products.length}
        />
        :
        <AddProductForm
          produstsList={productsList}
          setProdustsList={setProductsList}
          onSubmitMoreProd={onSubmitMoreProd}
        />
      }
    </form>
  );
};

export default Form;
