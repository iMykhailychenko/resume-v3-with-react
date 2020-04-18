import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/contacts.png';

const Contacts = () => (
  <>
    <PageFirstBlock title="Контакты" img={img} />
    <SplitLink path="/download" text="Загрузить резюме" />
  </>
);

export default Contacts;
