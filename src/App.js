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
          <Route path="/:id" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
