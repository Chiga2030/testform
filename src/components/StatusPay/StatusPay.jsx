import {
  useHistory,
} from 'react-router-dom';

import {
  useState,
} from 'react';

import defaultMessage from './defaultMessage';

import imgSuccess from './img/creditCardSucces.svg';
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
      <Header
        title={message[Number(status)].title}
        subtitle={message[Number(status)].subtitle}
      />
      <img src={status ? imgSuccess : imgFail} alt="" />
      <SubmitButton
        value={message[Number(status)].buttonValue}
        onButtonClick={onSubmit}
        bgColor={message[Number(status)].buttonBgColor}
      />
    </>
  );
};

export default StatusPay;
