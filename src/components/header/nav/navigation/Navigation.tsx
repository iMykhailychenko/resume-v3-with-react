import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

// import images
import contacts from '../../../../images/nav/contacts.jpg';
import download from '../../../../images/nav/download.jpg';
import education from '../../../../images/nav/education.jpg';
import experience from '../../../../images/nav/experience.jpg';
import general from '../../../../images/nav/general.jpg';
import main from '../../../../images/nav/main.jpg';
import reason from '../../../../images/nav/reason.jpg';
import salary from '../../../../images/nav/salary.jpg';
import skills from '../../../../images/nav/skills.jpg';

interface Props {
  menu: boolean;
  toggleMenu(menu: boolean): void;
}

const Navigation: React.FC<Props> = ({ menu, toggleMenu }) => (
  <nav className={styles.nav}>
    <div className={styles.scroll}>
      <NavLink
        to="/"
        exact
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Главная</h4>
        <img className={styles.img} src={main} alt="" />
      </NavLink>

      <NavLink
        to="/reason"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Почему я меняю профессию?</h4>
        <img className={styles.img} src={reason} alt="" />
      </NavLink>

      <NavLink
        to="/general"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Общая информация</h4>
        <img className={styles.img} src={general} alt="" />
      </NavLink>

      <NavLink
        to="/education"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Образование и курсы</h4>
        <img className={styles.img} src={education} alt="" />
      </NavLink>

      <NavLink
        to="/experience"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Мой опыт работы</h4>
        <img className={styles.img} src={experience} alt="" />
      </NavLink>

      <NavLink
        to="/skills"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Hard skills</h4>
        <img className={styles.img} src={skills} alt="" />
      </NavLink>

      <NavLink
        to="/salary"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Ожидаемая зарплата</h4>
        <img className={styles.img} src={salary} alt="" />
      </NavLink>

      <NavLink
        to="/contacts"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Контакты</h4>
        <img className={styles.img} src={contacts} alt="" />
      </NavLink>

      <NavLink
        to="/download"
        onClick={() => {
          toggleMenu(menu);
        }}
        className={styles.link}
        activeClassName={styles.active}
      >
        <h4 className={styles.title}>Загрузить резюме в pdf формате</h4>
        <img className={styles.img} src={download} alt="" />
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
