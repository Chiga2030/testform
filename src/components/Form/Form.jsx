import styles from './Form.module.css';

import Info from '../Info/Info';
import ProductList from '../ProductList/ProductList';

const Form = () => (
  <form className={styles.form}>
    <Info styles={styles} />
    <ProductList styles={styles} />
  </form>
);

export default Form;
