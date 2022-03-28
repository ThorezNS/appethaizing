import styles from './Category.module.css';
import Link from '../atoms/Link';

const Category = () => {
  return (
    <div className={styles.category}>
      <Link text="entree" />
      <Link text="breakfast" />
      <Link text="salad" />
      <Link text="appetizer" />
      <Link text="dessert" />
      <Link text="snack" />
    </div>
  );
};

export default Category;
