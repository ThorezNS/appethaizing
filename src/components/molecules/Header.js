import styles from './Header.module.css';
import Logo from '../atoms/Logo';
import Title from '../atoms/Title';
import SearchBar from '../atoms/SearchBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Title title="appethaizing" />
      <SearchBar placeholder="Find a recipe..." />
    </header>
  );
};

export default Header;
