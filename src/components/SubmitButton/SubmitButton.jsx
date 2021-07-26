import classNames from 'classnames';

import styles from './SubmitButton.module.css';

const SubmitButton = ({
  value,
  bgColor,
  ...props
}) => (
  <>
    <button
      className={classNames(
        styles.button,
        styles[`bgColor-${bgColor}`],
      )}
    >
      {value}
    </button>
  </>
);

export default SubmitButton;
