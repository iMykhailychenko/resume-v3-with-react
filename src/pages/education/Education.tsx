import React from 'react';
import PageFirstBlock from '../../components/page-first-block/PageFirstBlock';
import SplitLink from '../../components/split-link/SplitLink';
import ListElement from './ListElement/ListElement';
import styles from './Education.module.css';
import emoji from '../../images/emoji/education.png';

const initial = {
  title: 'string',
  text: 'string',
  background: '#fff',
  color: '#000',
  translate: '-180%',
  y: '90deg',
  x: '0',
}

interface Props {}

const Education: React.FC<Props> = () => (
  <>
    <PageFirstBlock title="Образование и курсы" img={emoji} />

    <div className={styles.section}>
      <ul className={styles.list}>
      <ListElement {...initial} />
      </ul>
    </div>

    <SplitLink path="/experience" text="Посмотреть мой опыт работы" />
  </>
);

export default Education;
