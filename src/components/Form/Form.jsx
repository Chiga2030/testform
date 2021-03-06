import {
  useState,
} from 'react';

import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import {
  defaultProductList,
  defaultProducts,
  defaultPrice,
} from './defaultStore';

import styles from './Form.module.css';

import Basket from '../Basket/Basket';
import AddProductForm from '../AddProductForm/AddProductForm';
import StatusPay from '../StatusPay/StatusPay';


const Form = () => {
  const addProduts = count => {
    const newProducts = [];

    for (let index = 1; index <= count; index++) {
      newProducts.push({
        id: index,
        name: `Product ${index}`,
        isToDelete: true,
      });
    }

    if (newProducts.length === 1) {
      newProducts[0].isToDelete = false;
    };

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

  const [
    isSucessfull,
    setIsSucessfull,
  ] = useState(true);

  const onAddMoreProd = () => setIsAddProd(!isAddProd);

  const onDeleteProd = id => {
    const newProductsList = products.filter(product => product.id !== id);

    setProducts(newProductsList);

    if (newProductsList.length > 1) {
      setPrice(
        (22 - (2 * (newProductsList.length - 2))) * newProductsList.length
      );
    } else if (newProductsList.length < 1) {
      setPrice(0);
    } else {
      setPrice(defaultPrice);
    };
  };

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

  const history = useHistory();

  const onSubmitAndPay = () => {
    setTimeout(() => {
      setIsSucessfull(!isSucessfull);
      if (isSucessfull) {
        return history.push('/paymentsuccess');
      } return history.push('/paymenterror');
    }, 2000);
  };


  return (
    <form
      className={styles.form}
    >
      <Switch>
        <Route exact path="/">
          {!isAddProd ?
            <Basket
              styles={styles}
              products={products}
              price={price}
              onAddMoreProd={onAddMoreProd}
              onDeleteProd={onDeleteProd}
              onSubmitAndPay={onSubmitAndPay}
              productCount={products.length}
            />
            :
            <AddProductForm
              produstsList={productsList}
              setProdustsList={setProductsList}
              onSubmitMoreProd={onSubmitMoreProd}
            />
          }
        </Route>
        <Route path="/paymentsuccess">
          <StatusPay status={true} />
        </Route>
        <Route path="/paymenterror">
          <StatusPay status={false} />
        </Route>
      </Switch>
    </form>
  );
};

export default Form;
