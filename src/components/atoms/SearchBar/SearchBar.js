import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
