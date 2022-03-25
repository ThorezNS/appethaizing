import styles from './NavBar.module.css';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.searchBarWrapper}>
        <img className={styles.logo} src={logo} alt="appethaizing logo" />
        <h1 className={styles.title}>appethaizing</h1>
      </div>
    </div>
  );
};

export default NavBar;
