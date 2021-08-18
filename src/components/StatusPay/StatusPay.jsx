import {
  useHistory,
} from 'react-router-dom';

import {
  useState,
} from 'react';

import defaultMessage from './defaultMessage';

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
      <SubmitButton
        value={message[Number(status)].buttonValue}
        onButtonClick={onSubmit}
        bgColor={message[Number(status)].buttonBgColor}
      />
    </>
  );
};

export default StatusPay;
