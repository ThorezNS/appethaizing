import styles from './NavBar.module.css';
import Header from '../../molecules/Header/Header';
import Category from '../../molecules/Category/Category';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Header />
      <Category />
    </nav>
  );
};

export default NavBar;
