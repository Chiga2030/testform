import {
  useHistory,
} from 'react-router-dom';

import {
  useState,
} from 'react';

import styles from './StatusPay.module.css';

import defaultMessage from './defaultMessage';

import imgSuccess from './img/creditCardSucces.png';
import imgFail from './img/creditCardFail.png';

import Header from '../Header/Header';
import SubmitButton from '../SubmitButton/SubmitButton';

const StatusPay = ({
  status,
}) => {
  const [
    message,
  ] = useState(defaultMessage);

  const history = useHistory();

  const onSubmit = () => history.push('/');


  return (
    <>
      <div className={styles.headerWrapper}>
        <Header
          title={message[Number(status)].title}
          subtitle={message[Number(status)].subtitle}
        />
      </div>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={status ? imgSuccess : imgFail}
          alt=""
        />
      </div>
      <div className={styles.buttonWrapper}>
        <SubmitButton
          value={message[Number(status)].buttonValue}
          onButtonClick={onSubmit}
          bgColor={message[Number(status)].buttonBgColor}
        />
      </div>
    </>
  );
};

export default StatusPay;
