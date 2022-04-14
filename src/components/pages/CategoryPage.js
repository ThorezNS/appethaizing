import { useParams } from 'react-router-dom';
import CardsContainer from '../organisms/CardsContainer/CardsContainer';

const CategoryPage = () => {
  const { id } = useParams();

  return (
    <CardsContainer page={id}>
      <div>{id}</div>
    </CardsContainer>
  );
};

export default CategoryPage;
