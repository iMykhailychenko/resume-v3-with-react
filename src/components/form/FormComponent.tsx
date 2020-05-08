import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CSSTransition } from 'react-transition-group';
import { validEmail, initialValues, encode } from './utils';

import popTransition from '../../transitions/pop.module.css';
import styles from './FormComponent.module.css';

interface Values {
  name: string;
  email: string;
  company: string;
  text: string;
  confirm: boolean;
}

interface Errors {
  email?: string;
  confirm?: string;
}

interface Props {
  content: { [key: string]: string };
}

const FormComponent: React.FC<Props> = ({ content }) => (
  <Formik
    initialValues={initialValues}
    validate={(values: Values): Errors => {
      const errors: Errors = {};
      if (!validEmail.test(values.email!)) errors.email = content.errorMail;
      if (!values.email) errors.email = content.errorNoMail;
      if (!values.confirm) errors.confirm = content.errorConfirm;

      return errors;
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      })
        .then(() => actions.setStatus(true))
        .catch(error => console.log(error));
    }}
  >
    {values => (
      <Form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h2 className={styles.title}>{content.title}</h2>

        <CSSTransition
          in={values.status}
          timeout={1000}
          classNames={popTransition}
          unmountOnExit
        >
          <p className={styles.success}>{content.success}</p>
        </CSSTransition>

        <Field
          className={styles.input}
          type="text"
          name="name"
          placeholder={content.name}
          autoComplete="off"
        />
        <ErrorMessage
          name="name"
          render={msg => <span className={styles.errors}>{msg}</span>}
        />

        <Field
          className={styles.input}
          type="email"
          name="email"
          placeholder={content.email}
          autoComplete="off"
        />
        <ErrorMessage
          name="email"
          render={msg => <span className={styles.errors}>{msg}</span>}
        />

        <Field
          className={styles.input}
          type="text"
          name="company"
          placeholder={content.company}
          autoComplete="off"
        />
        <ErrorMessage
          name="company"
          render={msg => <span className={styles.errors}>{msg}</span>}
        />

        <Field
          as="textarea"
          className={styles.textarea}
          rows={10}
          cols={45}
          name="text"
          placeholder={content.text}
        />

        <label className={styles.label} tabIndex={0}>
          <Field type="checkbox" name="confirm" />
          <span className={styles.checkmark}></span>
          <span className={styles.checktext}>{content.confirm}</span>
        </label>

        <ErrorMessage
          name="confirm"
          render={msg => <span className={styles.errors}>{msg}</span>}
        />

        <button className={styles.btn + ' btn-blue'} type="submit">
          {content.submit}
        </button>
      </Form>
    )}
  </Formik>
);

export default FormComponent;
