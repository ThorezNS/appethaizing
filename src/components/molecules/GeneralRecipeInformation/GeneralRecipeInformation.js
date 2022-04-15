import useFetch from '../../../containers/useFetch';
import FoodPicture from '../../atoms/FoodPicture/FoodPicture';
import TheFetchMessage from '../../atoms/TheFetchMessage/TheFetchMessage';
import Title from '../../atoms/Title/Title';
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
          <Title details title={response.title} />
          <div className={styles.imageWrapper}>
            {' '}
            <FoodPicture src={response.image} alt={response.title} />{' '}
          </div>
        </>
      )}
    </div>
  );
};

export default GeneralRecipeInformation;
