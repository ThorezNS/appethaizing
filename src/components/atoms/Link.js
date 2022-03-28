import styles from './Link.module.css';

const Link = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <a className={`${styles.link}  ${styles[text]}`} href="http://">
        {text}
      </a>
    </div>
  );
};

export default Link;
