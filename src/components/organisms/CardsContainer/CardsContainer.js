import styles from './CardsContainer.module.css';

const CardsContainer = ({ children, page }) => {
  return (
    <div className={`${styles.container} ${styles[page]}`}>{children}</div>
  );
};

export default CardsContainer;
