import styles from './ShortRecipeInfo.module.css';

const ShortRecipeInfo = ({ recipe }) => {
  const plural = (number) => (number > 1 ? 's' : '');
  const { readyInMinutes, servings } = recipe;

  return (
    <div className={styles.container}>
      {readyInMinutes && servings && (
        <p
          className={styles.quantityAndTime}
        >{`Ready in ${readyInMinutes} minute${plural(
          readyInMinutes
        )}, for ${servings} serving${plural(servings)}`}</p>
      )}
      <div className={styles.wrapper}>
        {recipe.cheap && <p>Cheap</p>}
        {recipe.veryPopular && <p>Very popular</p>}
        {recipe.veryHealthy && <p>Very healthy</p>}
        {recipe.dairyFree && <p>Dairy free</p>}
        {recipe.glutenFree && <p>Gluten free</p>}
        {recipe.vegan && <p>Vegan</p>}
        {recipe.vegetarian && <p>Vegetarian</p>}
        {recipe.ketogenic && <p>Ketogenic diet</p>}
        {recipe.lowFodmap && <p>Low FODMAP diet</p>}
        {recipe.sustainable && <p>Sustainable diet</p>}
        {recipe.whole30 && <p>Whole30 diet</p>}
      </div>
    </div>
  );
};

export default ShortRecipeInfo;
