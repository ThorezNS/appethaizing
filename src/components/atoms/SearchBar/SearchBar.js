import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`found/${inputValue}`);
    setInputValue('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
