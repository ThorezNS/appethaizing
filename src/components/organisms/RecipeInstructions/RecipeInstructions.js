import useFetch from '../../../containers/useFetch';
import TheFetchMessage from '../../atoms/TheFetchMessage/TheFetchMessage';
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
        response.map((instructions, index) => {
          return (
            <div key={index}>
              <h3>{instructions.name}</h3>
              {instructions.steps.map((step, index) => {
                return (
                  <div key={index}>
                    {step.equipment.length ? <p>equipments:</p> : null}
                    {step.equipment.map((equipment) => {
                      return <p key={equipment.id}>{`-${equipment.name}`}</p>;
                    })}
                    {step.ingredients.length ? <p>ingredients:</p> : null}
                    {step.ingredients.map((ingredient) => {
                      return <p key={ingredient.id}>{`-${ingredient.name}`}</p>;
                    })}

                    <p key={step.number}>{`${step.number}: ${step.step}`}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default RecipeInstructions;
