import styles from './FoodPicture.module.css';

const FoodPicture = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default FoodPicture;
