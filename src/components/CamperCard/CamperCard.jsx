
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { selectFavorites } from "../../redux/selectors";
import css from "./CamperCard.module.css";
import { FaStar, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
// Import other icons as needed for features

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav.id === camper.id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  const formatPrice = (price) => {
      return `€${Number(price).toFixed(2).replace('.', ',')}`;
  };

  return (
    <div className={css.card}>
      <img
        src={camper.gallery[0]?.original} // Use original as per previous code
        alt={camper.name}
        className={css.image}
      />
      <div className={css.details}>
        <div className={css.header}>
          <h3 className={css.name}>{camper.name}</h3>
          <div className={css.priceWrapper}>
            <span className={css.price}>{formatPrice(camper.price)}</span>
            <button
              onClick={handleToggleFavorite}
              className={`${css.favButton} ${isFavorite ? css.favorite : ""}`}
            >
              <FaHeart color={isFavorite ? "#E44848" : "#101828"} />
            </button>
          </div>
        </div>
        <div className={css.subHeader}>
            <span className={css.rating}><FaStar color="#FFC531" /> {camper.rating} ({camper.reviews.length} Reviews)</span>
            <span className={css.location}><FaMapMarkerAlt /> {camper.location}</span>
        </div>
        
        <p className={css.description}>{camper.description.substring(0, 60)}...</p>
        
        <div className={css.features}>
            {/* Map features/amenities here with icons. 
                Example:
            */}
            <span className={css.featureTag}>{camper.adults} adults</span>
            <span className={css.featureTag}>{camper.transmission}</span>
            <span className={css.featureTag}>{camper.engine}</span>
            {camper.kitchen && <span className={css.featureTag}>Kitchen</span>}
            {camper.AC && <span className={css.featureTag}>AC</span>}
        </div>

        <Link 
            to={`/catalog/${camper.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={css.showMoreButton}
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
