import styles from './NavBar.module.css';
import Header from '../../molecules/Header/Header';
import Category from '../../molecules/Category/Category';
import useScrollTop from '../../../containers/useScrollTop';

const NavBar = () => {
  const { isScrolledTop } = useScrollTop(70);

  return (
    <nav
      className={`${styles.navBarContainer} ${
        isScrolledTop ? styles.narrow : styles.thick
      }`}
    >
      <Header isScrolledTop={isScrolledTop} />
      {!isScrolledTop && <Category />}
    </nav>
  );
};

export default NavBar;
