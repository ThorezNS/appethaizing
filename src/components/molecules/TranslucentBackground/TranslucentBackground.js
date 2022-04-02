import styles from './TranslucentBackground.module.css';

const CardIconsContainerSection = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default CardIconsContainerSection;
