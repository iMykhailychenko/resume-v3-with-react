import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/experiance.png';

const Experiance = () => (
  <>
    <PageFirstBlock title="Мой опыт работы" img={img} />
    <SplitLink path="/skills" text="Hard skills" />
  </>
);

export default Experiance;
