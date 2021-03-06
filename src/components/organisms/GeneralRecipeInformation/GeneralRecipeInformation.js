import useFetch from '../../../containers/useFetch';
import FoodPicture from '../../atoms/FoodPicture/FoodPicture';
import TheFetchMessage from '../../atoms/TheFetchMessage/TheFetchMessage';
import Title from '../../atoms/Title/Title';
import ShortRecipeInfo from '../../molecules/ShortRecipeInfo/ShortRecipeInfo';
import styles from './GeneralRecipeInformation.module.css';

const GeneralRecipeInformation = ({ id }) => {
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}`
  );

  return (
    <div className={styles.container}>
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response && (
        <>
          <div>
            <Title details title={response.title} />
            <FoodPicture src={response.image} alt={response.title} />
          </div>
          <ShortRecipeInfo recipe={response} />
        </>
      )}
    </div>
  );
};

export default GeneralRecipeInformation;
