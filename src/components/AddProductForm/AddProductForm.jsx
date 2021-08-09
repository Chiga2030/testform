import styles from './AddProductForm.module.css';

import Header from '../Header/Header';
import ProductSelectionBlock
  from '../ProductSelectionBlock/ProductSelectionBlock';
import SubmitButton from '../SubmitButton/SubmitButton';

const AddProductForm = ({
  produstsList,
  setProdustsList,
  onSubmitMoreProd,
}) => (
  <>
    <Header
      title="Adding more products"
      subtitle="The more items you check, the better the price."
    />
    <ProductSelectionBlock
      produstsList={produstsList}
      setProdustsList={setProdustsList}
      blockStyle={styles.blockMarginsNormal}
    />
    <SubmitButton
      blockStyle={styles.blockMarginsLarge}
      value="Continue"
      bgColor="success"
      onSubmitMoreProd={onSubmitMoreProd}
    />
  </>
);

export default AddProductForm;
