import { useParams } from 'react-router-dom';
import RecipeInstructions from '../../organisms/RecipeInstructions/RecipeInstructions';
import GeneralRecipeInformation from '../../organisms/GeneralRecipeInformation/GeneralRecipeInformation';
import styles from './RecipeDetails.module.css';

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <GeneralRecipeInformation id={id} />
      <RecipeInstructions id={id} />
    </div>
  );
};

export default RecipeDetails;
