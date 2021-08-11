import styles from './DeleteButton.module.css';

const DeleteButton = ({
  onDeleteProd,
  prodictId,
}) => (
  <>
    <button
      type="button"
      className={styles.button}
      onClick={() => onDeleteProd(prodictId)}
    />
  </>
);


export default DeleteButton;
