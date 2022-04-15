import { Link } from 'react-router-dom';
import FoodPicture from '../../atoms/FoodPicture/FoodPicture';
import Title from '../../atoms/Title/Title';
import CardIconsContainer from '../../molecules/CardIconsContainer/CardIconsContainer';
import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/details/${recipe.id}`} className={styles.wrapper}>
      <Title card title={recipe.title} />
      <FoodPicture src={recipe.image} alt={recipe.title} />
      {recipe.readyInMinutes && <CardIconsContainer recipe={recipe} />}
    </Link>
  );
};

export default RecipeCard;
