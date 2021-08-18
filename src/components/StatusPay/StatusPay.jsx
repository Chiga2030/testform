import {
  Link,
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
        title={status ? message.success.title : message.fail.title}
        subtitle={status ? message.success.subtitle : message.fail.subtitle}
      />
      <Link to="/">
        <SubmitButton
          value="Back"
          onButtonClick={onSubmit}
        />
      </Link>
    </>
  );
};

export default StatusPay;
