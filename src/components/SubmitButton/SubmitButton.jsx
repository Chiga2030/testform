import classNames from 'classnames';

import styles from './SubmitButton.module.css';

const SubmitButton = ({
  value,
  bgColor,
  ...props
}) => (
  <div className={props.styles.blockMarginsVerySmall}>
    <button
      className={classNames(
        styles.button,
        styles[`bgColor-${bgColor}`],
      )}
      type="button"
    >
      {value}
    </button>
  </div>
);

export default SubmitButton;
