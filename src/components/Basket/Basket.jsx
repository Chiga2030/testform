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
}) => (
  <>
    <Info
      styles={styles}
    />
    <ProductList
      styles={styles}
      products={products}
    />
    <AddProducts
      styles={styles}
      onAddMoreProd={onAddMoreProd}
    />
    <SubmitButton
      blockStyle={styles.blockMarginsVerySmall}
      value={`Submit and Pay ${price} USD`}
      bgColor="success"
    />
    <SecurePayment />
  </>
);

export default Basket;
