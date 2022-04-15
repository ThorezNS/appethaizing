import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './GlobalStyles.module.css';
import NavBar from './components/organisms/NavBar/NavBar';
import Home from './components/pages/Home';
import CategoryPage from './components/pages/CategoryPage';
import RecipeDetails from './components/pages/RecipeDetails/RecipeDetails';

function App() {
  return (
    <div className={styles}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
