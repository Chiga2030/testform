import Header from '../Header/Header';
import ProductSelectionBlock
  from '../ProductSelectionBlock/ProductSelectionBlock';

const AddProductForm = () => (
  <>
    <Header
      title="Adding more products"
      subtitle="The more items you check, the better the price."
    />
    <ProductSelectionBlock />
  </>
);

export default AddProductForm;
