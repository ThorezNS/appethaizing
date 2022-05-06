import { useParams } from 'react-router-dom';
import useFetch from '../../containers/useFetch';
import TheFetchMessage from '../atoms/TheFetchMessage/TheFetchMessage';
import Title from '../atoms/Title/Title';
import CardsContainer from '../organisms/CardsContainer/CardsContainer';
import RecipeCard from '../organisms/RecipeCard/RecipeCard';

const CategoryPage = () => {
  const { category } = useParams();
  const KEY = process.env.REACT_APP_API_KEY;
  const type = category === 'entree' ? 'main course' : category;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&type=${type}&number=50`
  );

  return (
    <CardsContainer>
      <Title title={`get your ${category} recipe`} heading />
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response &&
        response.results.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
    </CardsContainer>
  );
};

export default CategoryPage;
