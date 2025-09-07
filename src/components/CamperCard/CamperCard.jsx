
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/favorites/favoritesSlice";
import { selectFavorites } from "../../redux/selectors";
import Modal from "../Modal/Modal";
import CamperDetails from "../CamperDetails/CamperDetails";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav._id === camper._id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formatPrice = (price) => {
    // Assuming price is a number, format it to two decimal places.
    const numericPrice = Number(price);
    return `€${!isNaN(numericPrice) ? numericPrice.toFixed(2) : '0.00'}`;
  };

  return (
    <div className={css.card}>
      <img
        src={camper.gallery[0]?.original}
        alt={camper.name}
        className={css.image}
      />
      <div className={css.details}>
        <div className={css.header}>
          <h3 className={css.name}>{camper.name}</h3>
          <div className={css.price}>
            <span>{formatPrice(camper.price)}</span>
            <button
              onClick={handleToggleFavorite}
              className={`${css.favButton} ${isFavorite ? css.favorite : ""}`}
            >
              ❤
            </button>
          </div>
        </div>
        <div className={css.info}>
          <span>⭐ {camper.rating}</span>
          <span>📍 {camper.location}</span>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.features}>
          <span>{camper.adults} adults</span>
          <span>{camper.transmission}</span>
          <span>{camper.engine}</span>
          {camper.kitchen && <span>Kitchen</span>}
          {camper.bathroom && <span>Bathroom</span>}
          {camper.AC && <span>AC</span>}
        </div>
        <button onClick={openModal} className={css.showMoreButton}>
          Show more
        </button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <CamperDetails camper={camper} />
        </Modal>
      )}
    </div>
  );
};

export default CamperCard;
