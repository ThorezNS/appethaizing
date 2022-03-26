import styles from './NavBar.module.css';
import Header from '../molecules/Header';
import Logo from '../atoms/Logo';
import Title from '../atoms/Title';
import SearchBar from '../atoms/SearchBar';

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <Header>
        <Logo />
        <Title title="appethaizing" />
        <SearchBar placeholder="Find a recipe..." />
      </Header>
    </nav>
  );
};

export default NavBar;
