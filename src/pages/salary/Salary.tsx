import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/salary.png';

const Salary = () => (
  <>
    <PageFirstBlock title="Ожидаемая зарплата" img={img} />
    <SplitLink path="/contacts" text="Контакты" />
  </>
);

export default Salary;
