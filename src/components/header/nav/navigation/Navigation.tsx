import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

// import images
import contactsWeb from '../../../../images/nav/contacts.webp';
import downloadWeb from '../../../../images/nav/download.webp';
import educationWeb from '../../../../images/nav/education.webp';
import experienceWeb from '../../../../images/nav/experience.webp';
import generalWeb from '../../../../images/nav/general.webp';
import mainWeb from '../../../../images/nav/main.webp';
import reasonWeb from '../../../../images/nav/reason.webp';
import salaryWeb from '../../../../images/nav/salary.webp';
import skillsWeb from '../../../../images/nav/skills.webp';

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

        <picture className={styles.img}>
          <source srcSet={mainWeb} type="image/webp" />
          <img src={main} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={reasonWeb} type="image/webp" />
          <img src={reason} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={generalWeb} type="image/webp" />
          <img src={general} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={educationWeb} type="image/webp" />
          <img src={education} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={experienceWeb} type="image/webp" />
          <img src={experience} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={skillsWeb} type="image/webp" />
          <img src={skills} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={salaryWeb} type="image/webp" />
          <img src={salary} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={contactsWeb} type="image/webp" />
          <img src={contacts} alt="" />
        </picture>
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

        <picture className={styles.img}>
          <source srcSet={downloadWeb} type="image/webp" />
          <img src={download} alt="" />
        </picture>
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
