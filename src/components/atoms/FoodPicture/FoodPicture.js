import styles from './FoodPicture.module.css';

const FoodPicture = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

export default FoodPicture;
