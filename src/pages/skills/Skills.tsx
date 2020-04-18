import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/skills.png';

const Skills = () => (
  <>
    <PageFirstBlock title="Hard skills" img={img} />
    <SplitLink path="/salary" text="Оплата моего труда" />
  </>
);

export default Skills;
