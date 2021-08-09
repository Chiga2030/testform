import {
  useState,
} from 'react';

import Info from '../Info/Info';
import ProductList from '../ProductList/ProductList';
import AddProducts from '../AddProducts/AddProducts';
import SubmitButton from '../SubmitButton/SubmitButton';
import SecurePayment from '../SecurePayment/SecurePayment';


const Basket = ({
  styles,
  products,
  price,
  onAddMoreProd,
  ...props
}) => {
  const [
    count,
    setCount,
  ] = useState(1);

  const scroll = val => {
    // console.log(event);
    console.log(event.deltaY);
    // const curent = document.querySelector(`.${val}`).style;
    // console.log(curent);
    document.querySelector(`.${val}`).style.transform =
      `translateY(${count * 10}vw`;
    // const productList = document.querySelector('.productList');
    setCount(event.deltaY > 0 ? count + 1 : count - 1);
  };


  return (
    <>
      <div
        className={styles.scrollWrapper}
      >
        <div className={styles.productListWrapper}>
          <div
            className={styles.productList}
            onWheel={() => scroll(styles.productList)}
          >
            <Info
              styles={styles}
            />
            <ProductList
              styles={styles}
              products={products}
            />
            {props.productCount < 5 ?
              <AddProducts
                styles={styles}
                onAddMoreProd={onAddMoreProd}
              /> :
              ''
            }
          </div>
        </div>
        <div className={styles.scroll}>
          <div className={styles.scrollThumb}></div>
        </div>
      </div>
      <SubmitButton
        blockStyle={styles.blockMarginsVerySmall}
        value={`Submit and Pay ${price} USD`}
        bgColor="success"
      />
      <SecurePayment />
    </>
  );
};

export default Basket;
