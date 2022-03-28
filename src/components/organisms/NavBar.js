import styles from './NavBar.module.css';
import Header from '../molecules/Header';
import Category from '../molecules/Category';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Header />
      <Category />
    </nav>
  );
};

export default NavBar;
