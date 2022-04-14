import { NavLink } from 'react-router-dom';
import styles from './Link.module.css';

const Link = ({ text }) => {
  const linkStyle = `${styles.link}  ${styles[text]}`;
  const activeLinkStyle = `${linkStyle} ${styles.active}`;

  return (
    <div className={styles.wrapper}>
      <NavLink
        to={`/${text}`}
        className={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
      >
        {text}
      </NavLink>
    </div>
  );
};

export default Link;
