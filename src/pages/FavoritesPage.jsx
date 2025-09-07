
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";
import CamperList from "../components/CamperList/CamperList";
import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className={css.container}>
      {favorites.length > 0 ? (
        <CamperList campers={favorites} />
      ) : (
        <p className={css.noFavorites}>You have no favorite campers yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
