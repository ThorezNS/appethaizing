import Icon from '../../atoms/Icon/Icon';
import IconText from '../../atoms/IconText/IconText';
import TranslucentBackground from '../TranslucentBackground/TranslucentBackground';
import styles from './CardIconsContainer.module.css';

function CardIconsContainer({ recipe }) {
  const {
    readyInMinutes,
    servings,
    cheap,
    veryHealthy,
    glutenFree,
    vegetarian,
  } = recipe;

  const isAnyIconPresent = cheap || veryHealthy || glutenFree || vegetarian;

  return (
    <div className={styles.wrapper}>
      <TranslucentBackground>
        <Icon name="readyInMinutes" recipe={recipe} />
        <IconText text={`${readyInMinutes} min`} />
        <Icon name="servings" recipe={recipe} />
        <IconText text={servings} />
      </TranslucentBackground>

      {isAnyIconPresent && (
        <TranslucentBackground>
          <Icon name="cheap" recipe={recipe} />
          <Icon name="veryHealthy" recipe={recipe} />
          <Icon name="glutenFree" recipe={recipe} />
          <Icon name="vegetarian" recipe={recipe} />
        </TranslucentBackground>
      )}
    </div>
  );
}

export default CardIconsContainer;
