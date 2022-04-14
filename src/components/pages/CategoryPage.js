import CardsContainer from '../organisms/CardsContainer/CardsContainer';

const CategoryPage = ({ name }) => {
  return (
    <CardsContainer page={name}>
      <div>{name}</div>
    </CardsContainer>
  );
};

export default CategoryPage;
