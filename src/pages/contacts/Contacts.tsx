import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import FormComponent from '../../components/form/FormContainer';

import styles from './Contacts.module.css';
import webp from '../../images/emoji/contacts.webp';
import img from '../../images/emoji/contacts.png';

type Props = {
  content: {
    [key: string]: string;
  };
};

const Contacts: React.FC<Props> = ({ content }) => {
  const mobile = window.innerWidth < 768;

  return (
    <main className="container">
      <PageFirstBlock title={content.title} img={img} webp={webp} />

      <section className={styles.section}>
        <PageText>
          <h3>{content.secondTitle}</h3>
          <p>{content.text}</p>
        </PageText>

        <div className={styles.container}>
          {mobile ? (
            <div className={styles.formWrp}>
              <FormComponent />
            </div>
          ) : (
            <Parallax
              className={styles.formWrp}
              animation={{ y: 0, scale: 1 }}
              style={{ transform: 'translateY(200px) scale(0.9)' }}
            >
              <FormComponent />
            </Parallax>
          )}

          <div className={styles.mapWrp}>
            <iframe
              className={styles.map}
              title="myLocation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.3493411358186!2d30.503960815729435!3d50.397326779468074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8cb9360005b%3A0x5830ab4023f437c8!2z0LLRg9C70LjRhtGPINCS0LDRgdC40LvRjNC60ZbQstGB0YzQutCwLCA0LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1588016801284!5m2!1suk!2sua"
              aria-hidden="false"
            />
          </div>
        </div>
      </section>

      <SplitLink path="/download" text={content.relink} />
    </main>
  );
};

export default Contacts;
