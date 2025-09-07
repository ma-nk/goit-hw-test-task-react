import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import FavoritesPage from "../../pages/FavoritesPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;