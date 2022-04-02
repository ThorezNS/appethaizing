import styles from './Logo.module.css';
import logo from '../../../assets/logo.png';

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="appethaizing logo" />;
};

export default Logo;
