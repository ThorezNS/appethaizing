import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './GlobalStyles.module.css';
import NavBar from './components/organisms/NavBar/NavBar';
import Home from './components/pages/Home';
import CategoryPage from './components/pages/CategoryPage';

function App() {
  return (
    <div className={styles}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entree" element={<CategoryPage name="entree" />} />
          <Route
            path="/breakfast"
            element={<CategoryPage name="breakfast" />}
          />
          <Route path="/salad" element={<CategoryPage name="salad" />} />
          <Route
            path="/appetizer"
            element={<CategoryPage name="appetizer" />}
          />
          <Route path="/dessert" element={<CategoryPage name="dessert" />} />
          <Route path="/snack" element={<CategoryPage name="snack" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
