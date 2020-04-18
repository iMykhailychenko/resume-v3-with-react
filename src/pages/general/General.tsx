import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/general.png';

const General = () => (
  <>
    <PageFirstBlock title="Общая информация" img={img} />
    <SplitLink path="/education" text="Образование и курсы" />
  </>
);

export default General;
