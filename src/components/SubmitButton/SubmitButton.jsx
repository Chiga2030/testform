import classNames from 'classnames';

import styles from './SubmitButton.module.css';

const SubmitButton = ({
  value,
  bgColor,
  onSubmitMoreProd,
  ...props
}) => (
  <div className={props.blockStyle}>
    <button
      className={classNames(
        styles.button,
        styles[`bgColor-${bgColor}`],
      )}
      type="button"
      onClick={onSubmitMoreProd}
    >
      {value}
    </button>
  </div>
);

export default SubmitButton;
