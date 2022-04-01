import styles from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  const { icon } = styles;
  const areIconsPresent =
    recipe.cheap ||
    recipe.veryHealthy ||
    recipe.glutenFree ||
    recipe.vegetarian;

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{recipe.title}</h3>
      <img src={recipe.image} alt="food" className={styles.image} />
      <div className={styles.iconWrapper}>
        <div className={styles.container}>
          <div className={`${icon} ${styles.stopwatch}`}></div>
          <div className={styles.text}>{`${recipe.readyInMinutes} min`}</div>
          <div className={`${icon} ${styles.serve}`}></div>
          <div className={styles.text}>{recipe.servings}</div>
        </div>
        <div className={areIconsPresent && styles.container}>
          <div className={recipe.cheap && `${icon} ${styles.loss}`}></div>
          <div
            className={recipe.veryHealthy && `${icon} ${styles.heartbeat}`}
          ></div>
          <div
            className={recipe.glutenFree && `${icon} ${styles.gluten}`}
          ></div>
          <div
            className={recipe.vegetarian && `${icon} ${styles.vegetarian}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
