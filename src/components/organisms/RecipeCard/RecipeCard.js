import Title from '../../atoms/Title/Title';
import CardIconsContainer from '../../molecules/CardIconsContainer/CardIconsContainer';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className={styles.wrapper}>
      <Title card title={recipe.title} />
      <img src={recipe.image} alt={recipe.title} className={styles.image} />
      {recipe.readyInMinutes && <CardIconsContainer recipe={recipe} />}
    </div>
  );
};

export default RecipeCard;
