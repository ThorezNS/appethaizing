import Title from '../../atoms/Title/Title';
import CardIconsContainer from '../../molecules/CardIconsContainer/CardIconsContainer';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.wrapper}>
      <Title card title={recipe.title} />
      <img src={recipe.image} alt="food" className={styles.image} />
      <CardIconsContainer recipe={recipe} />
    </div>
  );
};

export default RecipeCard;
