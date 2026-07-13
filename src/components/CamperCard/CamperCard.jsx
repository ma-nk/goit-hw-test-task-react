import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import { FaStar } from "react-icons/fa";
import mapIcon from "../../assets/map.svg";
import petrolIcon from "../../assets/petrol.svg";
import automaticIcon from "../../assets/automatic.svg";
import alcoveIcon from "../../assets/alcove.svg";

const CamperCard = ({ camper }) => {
  const formatPrice = (price) => {
      return `€${Number(price).toFixed(0)}`;
  };

  const formatForm = (form) => {
    const mapping = {
      alcove: "Alcove",
      panelTruck: "Panel Van",
      fullyIntegrated: "Integrated",
      semiIntegrated: "Semi Integrated"
    };
    return mapping[form] || form;
  };

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
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
          <span className={css.price}>{formatPrice(camper.price)}</span>
        </div>
        <div className={css.subHeader}>
            <span className={css.rating}><FaStar color="#FFC531" /> {camper.rating} ({camper.reviews.length} Reviews)</span>
            <span className={css.location}>
              <img src={mapIcon} alt="Map" className={css.locationIcon} />
              {camper.location}
            </span>
        </div>
        
        <p className={css.description}>{camper.description.substring(0, 60)}...</p>
        
        <ul className={css.features}>
            <li className={css.featureTag}>
              <img src={petrolIcon} alt="Engine" className={css.featureIcon} />
              <span>{capitalize(camper.engine)}</span>
            </li>
            <li className={css.featureTag}>
              <img src={automaticIcon} alt="Transmission" className={css.featureIcon} />
              <span>{capitalize(camper.transmission)}</span>
            </li>
            <li className={css.featureTag}>
              <img src={alcoveIcon} alt="Camper form" className={css.featureIcon} />
              <span>{formatForm(camper.form)}</span>
            </li>
        </ul>

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
