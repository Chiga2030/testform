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
}) => (
  <>
    <div className={styles.scrollWrapper}>
      <div className={styles.productListWrapper}>
        <div className={styles.productList}>
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

export default Basket;
