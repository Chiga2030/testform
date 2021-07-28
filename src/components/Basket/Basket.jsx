import Info from '../Info/Info';
import ProductList from '../ProductList/ProductList';
import AddProducts from '../AddProducts/AddProducts';
import SubmitButton from '../SubmitButton/SubmitButton';
import SecurePayment from '../SecurePayment/SecurePayment';


const Basket = ({
  styles,
  products,
  price,
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
    />
    <SubmitButton
      styles={styles}
      value={`Submit and Pay ${price} USD`}
      bgColor="success"
    />
    <SecurePayment />
  </>
);

export default Basket;
