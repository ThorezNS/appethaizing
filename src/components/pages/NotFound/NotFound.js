import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>Sorry</h2>
      <p>Page not found</p>
      <Link to="/">Go back to the home page...</Link>
    </div>
  );
};

export default NotFound;
