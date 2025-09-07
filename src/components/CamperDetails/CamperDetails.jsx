
import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import Reviews from "../Reviews/Reviews";
import css from "./CamperDetails.module.css";

const CamperDetails = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>{camper.name}</h2>
        <p>
          ⭐ {camper.rating} ({camper.reviews.length} Reviews) 📍{" "}
          {camper.location}
        </p>
        <h3>€{camper.price.toFixed(2)}</h3>
      </div>
      <div className={css.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.original}
            alt={`${camper.name} ${index + 1}`}
            className={css.galleryImage}
          />
        ))}
      </div>
      <p className={css.description}>{camper.description}</p>
      <div className={css.tabs}>
        <button
          className={activeTab === "features" ? css.activeTab : ""}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={activeTab === "reviews" ? css.activeTab : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={css.content}>
        <div className={css.detailsPanel}>
          {activeTab === "features" && (
            <div className={css.features}>
              <ul>
                <li>Form: {camper.form}</li>
                <li>Length: {camper.length}</li>
                <li>Width: {camper.width}</li>
                <li>Height: {camper.height}</li>
                <li>Tank: {camper.tank}</li>
                <li>Consumption: {camper.consumption}</li>
              </ul>
            </div>
          )}
          {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default CamperDetails;
