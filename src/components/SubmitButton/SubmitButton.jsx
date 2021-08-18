// import {
//   Link,
// } from 'react-router-dom';

import {
  useState,
} from 'react';

import classNames from 'classnames';

import styles from './SubmitButton.module.css';

import loader from './img/loader.svg';

const SubmitButton = ({
  value,
  isDisable,
  onButtonClick,
  ...props
}) => {
  const [
    isLoading,
    setIsLoading,
  ] = useState(false);

  const showLoader = () => setIsLoading({
    isLoading: true,
  });

  return (
    <div className={props.blockStyle}>
      {/* <Link to="/paymentsuccess"> */}
      <button
        disabled={isDisable}
        className={classNames(
          styles.button,
          {
            [styles.bgColorSuccess]: !isDisable,
            [styles.disabled]: isDisable,
          },
        )}
        type="button"
        onClick={() => {
          showLoader();
          onButtonClick();
        }}
      >
        {
          isLoading ?
            <img className={styles.loader} src={loader} alt="" /> :
            value
        }
      </button>
      {/* </Link> */}
    </div>
  );
};

export default SubmitButton;
