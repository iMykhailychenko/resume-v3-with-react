import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import img from '../../images/emoji/reason.png';

const Reason = () => (
  <>
    <PageFirstBlock title="Почему я меняю профессию?" img={img} />
    <SplitLink path="/general" text="Просмотреть общую информацию обомне" />
  </>
);

export default Reason;
