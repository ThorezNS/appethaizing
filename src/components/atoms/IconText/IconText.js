import styles from './IconText.module.css';

const IconText = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};

export default IconText;
