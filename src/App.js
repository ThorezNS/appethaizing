import styles from './GlobalStyles.module.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className={styles}>
      <NavBar />
      <h1>hello world</h1>
    </div>
  );
}

export default App;
