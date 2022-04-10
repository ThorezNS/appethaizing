import styles from './TheFetchMessage.module.css';

const TheFetchMessage = ({ isLoading, error }) => {
  return (
    <>
      {isLoading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default TheFetchMessage;
