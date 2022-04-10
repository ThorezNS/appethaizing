import useFetch from '../../containers/useFetch';
import Curiosity from '../atoms/Curiosity/Curiosity';
import TheFetchMessage from '../atoms/TheFetchMessage/TheFetchMessage';
import CardsContainer from '../organisms/CardsContainer/CardsContainer';
import RecipeCard from '../organisms/RecipeCard/RecipeCard';

const Home = () => {
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=5`
  );

  return (
    <CardsContainer page="home">
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response &&
        response.recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      <Curiosity />
    </CardsContainer>
  );
};

export default Home;
