import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import Reviews from "../Reviews/Reviews";
import css from "./CamperDetails.module.css";
import { FaStar } from "react-icons/fa";
import mapIcon from "../../assets/map.svg";

const CamperDetails = ({ camper }) => {
  const [activeImage, setActiveImage] = useState(camper.gallery[0]?.original || "");

  const amenities = [
    { key: "transmission", label: camper.transmission, icon: null },
    { key: "engine", label: camper.engine, icon: null },
    { key: "AC", label: "AC", icon: null },
    { key: "bathroom", label: "Bathroom", icon: null },
    { key: "kitchen", label: "Kitchen", icon: null },
    { key: "TV", label: "TV", icon: null },
    { key: "radio", label: "Radio", icon: null },
    { key: "refrigerator", label: "Refrigerator", icon: null },
    { key: "microwave", label: "Microwave", icon: null },
    { key: "gas", label: "Gas", icon: null },
    { key: "water", label: "Water", icon: null },
  ];

  const vehicleDetails = [
    { label: "Form", value: camper.form },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  const formatPrice = (price) => {
    return `€${Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace('.', ',')}`;
  };

  return (
    <div className={css.container}>
      {/* Top section: Images on left, info & vehicle details on right */}
      <div className={css.topSection}>
        {/* Left column: Gallery */}
        <div className={css.galleryColumn}>
          <div className={css.mainImageWrapper}>
            <img src={activeImage} alt={camper.name} className={css.mainImage} />
          </div>
          <div className={css.thumbnails}>
            {camper.gallery.map((image, index) => (
              <img
                key={index}
                src={image.original}
                alt={`${camper.name} thumbnail ${index + 1}`}
                className={`${css.thumbnail} ${activeImage === image.original ? css.activeThumbnail : ""}`}
                onClick={() => setActiveImage(image.original)}
              />
            ))}
          </div>
        </div>

        {/* Right column: Info & Specifications */}
        <div className={css.infoColumn}>
          <h2 className={css.name}>{camper.name}</h2>
          <div className={css.meta}>
            <span className={css.rating}><FaStar color="#FFC531" /> {camper.rating} ({camper.reviews.length} Reviews)</span>
            <span className={css.location}>
              <img src={mapIcon} alt="Map" className={css.locationIcon} />
              {camper.location}
            </span>
          </div>
          <h3 className={css.price}>{formatPrice(camper.price)}</h3>
          
          <p className={css.description}>{camper.description}</p>
          
          <div className={css.vehicleDetails}>
            <h3 className={css.sectionTitle}>Vehicle details</h3>
            <ul className={css.amenities}>
              {amenities.map(item => {
                if (camper[item.key]) {
                  const value = camper[item.key];
                  return (
                    <li key={item.key} className={css.amenity}>
                      <span>
                        {typeof value === 'boolean' 
                          ? item.label 
                          : value}
                      </span>
                    </li>
                  )
                }
                return null;
              })}
            </ul>
            
            <ul className={css.specsTable}>
              {vehicleDetails.map((detail, index) => (
                <li key={index} className={css.specRow}>
                  <span className={css.specLabel}>{detail.label}</span>
                  <span className={css.specValue}>{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section: Reviews on left, Booking Form on right */}
      <div className={css.bottomSection}>
        <div className={css.reviewsColumn}>
          <h3 className={css.sectionTitle}>Reviews</h3>
          <Reviews reviews={camper.reviews} />
        </div>
        <div className={css.bookingColumn}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
