import { Link } from 'react-router-dom';
import styles from './Title.module.css';

const Title = ({ title, card }) => {
  return (
    <>
      {card ? (
        <h3 className={styles.card}>{title}</h3>
      ) : (
        <Link to="/">
          {' '}
          <h1 className={styles.main}>{title}</h1>{' '}
        </Link>
      )}
    </>
  );
};

export default Title;
