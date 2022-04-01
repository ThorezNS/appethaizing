import styles from './GlobalStyles.module.css';
import NavBar from './components/organisms/NavBar';
import useFetch from './containers/useFetch';
import RecipeCard from './components/molecules/RecipeCard';

function App() {
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=2`
  );

  return (
    <div className={styles}>
      <NavBar />
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {response &&
        response.recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
    </div>
  );
}

export default App;
