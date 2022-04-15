import styles from './Header.module.css';
import Logo from '../../atoms/Logo/Logo';
import Title from '../../atoms/Title/Title';
import SearchBar from '../../atoms/SearchBar/SearchBar';

const Header = ({ isScrolledTop }) => {
  return (
    <header className={styles.header}>
      <Logo />
      {!isScrolledTop && <Title main title="appethaizing" />}
      <SearchBar placeholder="Find a recipe..." />
    </header>
  );
};

export default Header;
