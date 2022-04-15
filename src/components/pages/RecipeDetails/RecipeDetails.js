import { useParams } from 'react-router-dom';
import GeneralRecipeInformation from '../../molecules/GeneralRecipeInformation/GeneralRecipeInformation';
import styles from './RecipeDetails.module.css';

const RecipeDetails = () => {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <GeneralRecipeInformation id={id} />
    </div>
  );
};

export default RecipeDetails;
