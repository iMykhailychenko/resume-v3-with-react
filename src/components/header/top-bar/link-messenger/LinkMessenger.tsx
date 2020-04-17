import React from 'react';
import styles from './LinkMessenger.module.css';

interface Props {
  theme: string;
}

const LinkMessenger: React.FC<Props> = ({ theme }) => {
  const color = theme === 'light' ? '#000' : '#fff';
  return (
    <a
      className={styles.link}
      href="https://www.messenger.com/t/100005827514352"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>Ihor Mykhailychenko</span>
      <svg
        className={styles.logo}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill={color}
      >
        <path d="M256,0C114.624,0,0,106.112,0,237.024c0,74.592,37.216,141.12,95.392,184.576V512l87.168-47.84 c23.264,6.432,47.904,9.92,73.44,9.92c141.376,0,256-106.112,256-237.024S397.376,0,256,0z M281.44,319.2l-65.184-69.536 L89.056,319.2l139.936-148.544l66.784,69.536l125.6-69.536L281.44,319.2z"></path>
      </svg>
    </a>
  );
};

export default LinkMessenger;
