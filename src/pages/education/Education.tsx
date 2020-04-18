import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/education.png';

const Education = () => (
  <>
    <PageFirstBlock title="Образование и курсы" img={img} />
    <SplitLink path="/experience" text="Посмотреть мой опыт работы" />
  </>
);

export default Education;
