import React from 'react';
import styles from './Footer.module.css';

interface Props {
  content: {
    text: string;
    btn: string;
  };
  popup: boolean;
  openPopup(popup: boolean): void;
}

const Footer: React.FC<Props> = ({ content, popup, openPopup }) => (
  <footer className={styles.footer + ' footer'}>
    <div className={styles.left}>
      <span>{content.text}</span>

      <button className="btn-blue" onClick={() => openPopup(popup)}>
        {content.btn}
      </button>
    </div>

    <ul className={styles.right}>
      <li>
        <a
          className={styles.link}
          href="https://github.com/iMykhailychenko"
          target="_blank"
          rel="noopener noreferrer"
          title="github"
        >
          github
        </a>
      </li>

      <li>
        <a
          className={styles.link}
          href="https://t.me/ihormykh"
          target="_blank"
          rel="noopener noreferrer"
          title="telegram"
        >
          telegram
        </a>
      </li>

      <li>
        <a
          className={styles.link}
          href="https://www.facebook.com/profile.php?id=100005827514352"
          target="_blank"
          rel="noopener noreferrer"
          title="facebook"
        >
          facebook
        </a>
      </li>

      <li>
        <a
          className={styles.link}
          href="mailto:igor.c.m@ukr.net"
          title="Нажмите на ссылку чтобы отправить письмо"
        >
          igor.c.m@ukr.net
        </a>
      </li>
      <li>
        <a
          className={styles.link}
          href="tel:+380977024504"
          title="С нетерпением жду вашего звонка"
        >
          097-702-45-04
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
