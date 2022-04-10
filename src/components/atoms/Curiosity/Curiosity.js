import useFetch from '../../../containers/useFetch';
import TheFetchMessage from '../TheFetchMessage/TheFetchMessage';
import styles from './Curiosity.module.css';

const Curiosity = () => {
  const KEY = process.env.REACT_APP_API_KEY;
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/food/trivia/random?apiKey=${KEY}`
  );

  return (
    <div className={styles.text}>
      <TheFetchMessage isLoading={isLoading} error={error} />
      {response && <p>{`"${response.text}"`}</p>}
    </div>
  );
};

export default Curiosity;
