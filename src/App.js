import styles from './GlobalStyles.module.css';
import NavBar from './components/organisms/NavBar';
import useFetch from './containers/useFetch';

function App() {
  const { response, isLoading, error } = useFetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
  );

  return (
    <div className={styles}>
      <NavBar />
      {isLoading && <h1>LOADING...</h1>}
      {error && <h1>{error}</h1>}
      {response &&
        response.recipes.map((e) => {
          return (
            <div>
              <h1 key={e.id}>{e.title}</h1>
              <img src={e.image} alt="food" />
            </div>
          );
        })}
    </div>
  );
}

export default App;
