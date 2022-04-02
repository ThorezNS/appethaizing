import styles from './Title.module.css';

const Title = ({ title, card }) => {
  return (
    <>
      {card ? (
        <h3 className={styles.card}>{title}</h3>
      ) : (
        <h1 className={styles.main}>{title}</h1>
      )}
    </>
  );
};

export default Title;
