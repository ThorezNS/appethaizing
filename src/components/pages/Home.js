import useFetch from '../../containers/useFetch';
import RecipeCard from '../organisms/RecipeCard/RecipeCard';
import styles from './Home.module.css';

const Home = () => {
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=20`
  );

  return (
    <div className={response ? styles.container : styles.message}>
      {isLoading && <p className={styles.message}>Loading...</p>}
      {error && <p className={styles.message}>{error}</p>}
      {response &&
        response.recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
    </div>
  );
};

export default Home;
