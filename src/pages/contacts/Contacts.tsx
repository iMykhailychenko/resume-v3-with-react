import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import FormComponent from '../../components/form/FormComponent';

import styles from './Contacts.module.css';
import img from '../../images/emoji/contacts.png';

const Contacts = () => (
  <>
    <PageFirstBlock title="Контакты" img={img} />

    <div className={styles.container}>
      <div className={styles.formWrp}>
        <FormComponent />
      </div>
      <iframe
        className={styles.map}
        title="myLocation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0192308642!2d30.52267701561989!3d50.40347919862942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf49bba0846b%3A0x36710373f1fbc0b5!2z0L_RgNC-0YHQvy4g0J3QsNGD0LrQuCwgMTAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1587335385863!5m2!1sru!2sua"
        aria-hidden="false"
      />
    </div>

    <SplitLink path="/download" text="Загрузить резюме" />
  </>
);

export default Contacts;
