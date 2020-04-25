import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import FormComponent from '../../components/form/FormContainer';

import styles from './Contacts.module.css';
import img from '../../images/emoji/contacts.png';

type Props = {
  content: {
    [key: string]: string;
  };
};

const Contacts: React.FC<Props> = ({ content }) => (
  <>
    <PageFirstBlock title={content.title} img={img} />

    <section className={styles.section}>
      <PageText>
        <h3>{content.secondTitle}</h3>
        <p>{content.text}</p>
      </PageText>

      <div className={styles.container}>
        <Parallax
          className={styles.formWrp}
          animation={{ y: 0, scale: 1 }}
          style={{ transform: 'translateY(200px) scale(0.9)' }}
        >
          <FormComponent />
        </Parallax>

        <div className={styles.mapWrp}>
          <iframe
            className={styles.map}
            title="myLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0192308642!2d30.52267701561989!3d50.40347919862942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf49bba0846b%3A0x36710373f1fbc0b5!2z0L_RgNC-0YHQvy4g0J3QsNGD0LrQuCwgMTAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1587335385863!5m2!1sru!2sua"
            aria-hidden="false"
          />
        </div>
      </div>
    </section>

    <SplitLink path="/download" text={content.relink} />
  </>
);

export default Contacts;
