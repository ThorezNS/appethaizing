import styles from './GlobalStyles.module.css';
import NavBar from './components/organisms/NavBar/NavBar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className={styles}>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
