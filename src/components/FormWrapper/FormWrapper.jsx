import {
  HashRouter as Router,
} from 'react-router-dom';

import styles from './FormWrapper.module.css';

import Form from '../Form/Form';

const FormWrapper = () => (
  <Router basename="/">
    <div className={styles.wrapper}>
      <Form />
    </div>
  </Router>
);

export default FormWrapper;
