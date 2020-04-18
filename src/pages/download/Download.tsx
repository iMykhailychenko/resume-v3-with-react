import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/download.png';

const Download = () => (
  <>
    <PageFirstBlock title="Загрузить резюме" img={img} />
    <SplitLink path="/reason" text="Почему я меняю профессию?" />
  </>
);

export default Download;
