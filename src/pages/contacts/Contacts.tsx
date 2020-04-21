import React from 'react';
import { Parallax } from 'rc-scroll-anim';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import PageText from '../../components/page-text/PageText';
import FormComponent from '../../components/form/FormComponent';

import styles from './Contacts.module.css';
import img from '../../images/emoji/contacts.png';

const Contacts = () => (
  <>
    <PageFirstBlock title="Контакты" img={img} />

    <section className={styles.section}>
      <PageText>
        <h3>Consequuntur sapiente, aspernatur cum voluptate ad expedita?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          obcaecati atque facilis, animi qui labore veritatis et aliquid dolorem
          accusantium ducimus. Sed accusamus, optio error labore delectus
          facilis temporibus voluptatum!
        </p>
      </PageText>

      <div className={styles.container}>
        <Parallax
          className={styles.formWrp}
          animation={{ y: 0 }}
          style={{ transform: 'translateY(150px)' }}
        >
          <FormComponent />
        </Parallax>

        <Parallax
          className={styles.mapWrp}
          animation={{ x: 0 }}
          style={{ transform: 'translate(-400px, -50%)' }}
        >
          <iframe
            className={styles.map}
            title="myLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.0192308642!2d30.52267701561989!3d50.40347919862942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf49bba0846b%3A0x36710373f1fbc0b5!2z0L_RgNC-0YHQvy4g0J3QsNGD0LrQuCwgMTAsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1587335385863!5m2!1sru!2sua"
            aria-hidden="false"
          />
        </Parallax>
      </div>
    </section>

    <SplitLink path="/download" text="Загрузить резюме" />
  </>
);

export default Contacts;
