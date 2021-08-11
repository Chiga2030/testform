import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './simplebar.css';

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
  onDeleteProd,
  ...props
}) => (
  <>
    <SimpleBar
      style={{
        maxHeight: '25vw',
      }}
      autoHide={false}
      forceVisible={false}
      scrollbarMaxSize="50"
      classNames={{
        scrollbar: 'simplebar-scrollbar',
        track: 'simplebar-track',
      }}
    >
      <div className={styles.productList}>
        <Info styles={styles} />
        <ProductList
          styles={styles}
          products={products}
          onDeleteProd={onDeleteProd}
        />
        {props.productCount < 5 ?
          <AddProducts
            styles={styles}
            onAddMoreProd={onAddMoreProd}
          /> :
          ''
        }
      </div>
    </SimpleBar>

    <SubmitButton
      blockStyle={styles.blockMarginsVerySmall}
      value={price === 0 ?
        'Add more products, please' :
        `Submit and Pay ${price} USD`}
      bgColor={price === 0 ? 'disabled' : 'success'}
    />
    <SecurePayment />
  </>
);


export default Basket;
