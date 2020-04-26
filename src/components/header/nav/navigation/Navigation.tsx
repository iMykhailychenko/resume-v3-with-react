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
  content: { [key: string]: string };
  menu: boolean;
  toggleMenu(menu: boolean): void;
}

const Navigation: React.FC<Props> = ({ content, menu, toggleMenu }) => (
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
        <h4 className={styles.title}>{content.main}</h4>
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
        <h4 className={styles.title}>{content.reason}</h4>
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
        <h4 className={styles.title}>{content.general}</h4>
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
        <h4 className={styles.title}>{content.education}</h4>
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
        <h4 className={styles.title}>{content.experience}</h4>
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
        <h4 className={styles.title}>{content.skills}</h4>
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
        <h4 className={styles.title}>{content.salary}</h4>
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
        <h4 className={styles.title}>{content.contacts}</h4>
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
        <h4 className={styles.title}>{content.download}</h4>
        <img className={styles.img} src={download} alt="" />
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
