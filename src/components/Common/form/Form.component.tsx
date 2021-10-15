import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { ReactElement } from 'react';
import { CSSTransition } from 'react-transition-group';

import { encode, initialValues, validEmail } from '../../../services/utils';
import popTransition from '../../../transitions/pop.module.css';
import ConfettiWrp from '../confetti';
import css from './Form.module.css';

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

const FormComponent = ({ content }: Props): ReactElement => (
    <Formik
        initialValues={initialValues}
        validate={(values: Values): Errors => {
            const errors: Errors = {};
            if (!validEmail.test(values.email)) errors.email = content.errorMail;
            if (!values.email) errors.email = content.errorNoMail;
            if (!values.confirm) errors.confirm = content.errorConfirm;

            return errors;
        }}
        onSubmit={(values, actions) => {
            actions.resetForm();
            fetch('', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode({ 'form-name': 'contact', ...values }),
            })
                .then(res => actions.setStatus(res.ok ? 'success' : 'error'))
                .catch(() => actions.setStatus('error'));
        }}
    >
        {values => (
            <>
                {values.status === 'success' && <ConfettiWrp />}
                <Form className={css.form} data-netlify="true" data-netlify-honeypot="bot-field">
                    <h2 className={css.title}>{content.title}</h2>

                    <CSSTransition
                        in={values.status === 'success'}
                        timeout={1000}
                        classNames={popTransition}
                        unmountOnExit
                    >
                        <p className={css.success}>{content.success}</p>
                    </CSSTransition>

                    <CSSTransition
                        in={values.status === 'error'}
                        timeout={1000}
                        classNames={popTransition}
                        unmountOnExit
                    >
                        <p className={css.error}>{content.error}</p>
                    </CSSTransition>

                    <Field
                        className={css.input}
                        type="text"
                        name="name"
                        placeholder={content.name}
                        autoComplete="off"
                    />

                    <Field
                        className={css.input}
                        type="email"
                        name="email"
                        placeholder={content.email}
                        autoComplete="off"
                    />
                    <ErrorMessage name="email" render={msg => <span className={css.errors}>{msg}</span>} />

                    <Field
                        className={css.input}
                        type="text"
                        name="company"
                        placeholder={content.company}
                        autoComplete="off"
                    />

                    <Field
                        as="textarea"
                        className={css.textarea}
                        rows={10}
                        cols={45}
                        name="text"
                        placeholder={content.text}
                    />

                    <label className={css.label}>
                        <Field type="checkbox" name="confirm" />
                        <span className={css.checkmark} />
                        <span className={css.checktext}>{content.confirm}</span>
                    </label>

                    <ErrorMessage name="confirm" render={msg => <span className={css.errors}>{msg}</span>} />

                    <button className={css.btn + ' btn-blue'} type="submit">
                        {content.submit}
                    </button>
                </Form>
            </>
        )}
    </Formik>
);

export default FormComponent;
