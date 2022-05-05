import useFetch from '../../../containers/useFetch';
import TheFetchMessage from '../../atoms/TheFetchMessage/TheFetchMessage';
import Title from '../../atoms/Title/Title';
import InstructionDetails from '../../molecules/InstructionDetails/InstructionDetails';
import styles from './RecipeInstructions.module.css';

const RecipeInstructions = ({ id }) => {
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${KEY}`
  );

  return (
    <div className={styles.container}>
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response &&
        response.map((instruction, index) => {
          return (
            <div className={styles.instruction} key={index}>
              <Title title={instruction.name} details />
              {instruction.steps.map((step, subindex) => {
                return <InstructionDetails details={step} key={subindex} />;
              })}
            </div>
          );
        })}
    </div>
  );
};

export default RecipeInstructions;
