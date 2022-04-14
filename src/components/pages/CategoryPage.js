import { useParams } from 'react-router-dom';
import useFetch from '../../containers/useFetch';
import TheFetchMessage from '../atoms/TheFetchMessage/TheFetchMessage';
import CardsContainer from '../organisms/CardsContainer/CardsContainer';
import RecipeCard from '../organisms/RecipeCard/RecipeCard';

const CategoryPage = () => {
  const { id } = useParams();
  const KEY = process.env.REACT_APP_API_KEY;
  const type = id === 'entree' ? 'main course' : id;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&type=${type}&number=100`
  );

  return (
    <CardsContainer page={id}>
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response &&
        response.results.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
    </CardsContainer>
  );
};

export default CategoryPage;
