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

  console.log(isDisable);
  return (
    <div className={props.blockStyle}>
      <button
        className={classNames(
          styles.button,
          {
            [styles.bgColorSuccess]: isDisable,
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
    </div>
  );
};

export default SubmitButton;
