import styles from './TheFetchMessage.module.css';

const TheFetchMessage = ({ isLoading, error }) => {
  return (
    <>
      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
    </>
  );
};

export default TheFetchMessage;
