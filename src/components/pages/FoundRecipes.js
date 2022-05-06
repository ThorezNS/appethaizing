import { useParams } from 'react-router-dom';
import CardsContainer from '../organisms/CardsContainer/CardsContainer';
import useFetch from '../../containers/useFetch';
import TheFetchMessage from '../atoms/TheFetchMessage/TheFetchMessage';
import RecipeCard from '../organisms/RecipeCard/RecipeCard';
import Title from '../atoms/Title/Title';

const FoundRecipes = () => {
  const { found } = useParams();
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&query=${found}&number=50`
  );

  return (
    <CardsContainer>
      <Title title={`get your ${found} recipe`} heading />
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response &&
        response.results.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
    </CardsContainer>
  );
};

export default FoundRecipes;
