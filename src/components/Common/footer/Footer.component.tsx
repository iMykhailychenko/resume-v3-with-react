import clsx from 'clsx';
import React, { ReactElement } from 'react';

import css from './Footer.module.css';

interface Props {
  content: {
    text: string;
    btn: string;
  };
  openPopup: () => void;
}

const Footer = ({ content, openPopup }: Props): ReactElement => {
  return (
    <footer>
      <div className={clsx(css.footer, 'footer')}>
        <div className={css.left}>
          <span>{content.text}</span>
          <button className="btn-blue" onClick={openPopup}>
            {content.btn}
          </button>
        </div>
        <ul className={css.right}>
          <li>
            <a
              className={css.link}
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
              className={css.link}
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
              className={css.link}
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
              className={css.link}
              href="mailto:igor.c.m@ukr.net"
              title="Нажмите на ссылку чтобы отправить письмо"
            >
              igor.c.m@ukr.net
            </a>
          </li>
          <li>
            <a
              className={css.link}
              href="tel:+380977024504"
              title="С нетерпением жду вашего звонка"
            >
              097-702-45-04
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
