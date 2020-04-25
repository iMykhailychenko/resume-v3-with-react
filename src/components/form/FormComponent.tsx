import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CSSTransition } from 'react-transition-group';
import popTransition from '../../transitions/pop.module.css';
import styles from './FormComponent.module.css';

interface Props {
  content: any;
}

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

const validEmail: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const initialValues: Values = {
  name: '',
  email: '',
  company: '',
  text: '',
  confirm: false,
};

const FormComponent: React.FC<Props> = ({ content }) => (
  <Formik
    initialValues={initialValues}
    validate={(values: Values): Errors => {
      const errors: Errors = {};
      if (!validEmail.test(values.email!))
        errors.email = 'Упсс.. Кажется здесь есть ошибка.';
      if (!values.email)
        errors.email =
          'Я не смогу ответить на ваш вопрос незная вашу электронную почту.';
      if (!values.confirm)
        errors.confirm =
          'Не забудте отметить согласие на обработку персональной информации.';

      return errors;
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
      actions.setStatus(true);
    }}
  >
    {values => (
      <Form className={styles.form}>
        <h2 className={styles.title}>{content.title}</h2>

        <CSSTransition
          in={values.status}
          timeout={1000}
          classNames={popTransition}
          unmountOnExit
        >
          <p className={styles.success}>
            Ваш вопрос успешно отправлен. Я постараюсь ответить на него
            максимально быстро.
          </p>
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

        <textarea
          className={styles.textarea}
          rows={10}
          cols={45}
          name="text"
          placeholder={content.text}
        />

        <label className={styles.label}>
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
