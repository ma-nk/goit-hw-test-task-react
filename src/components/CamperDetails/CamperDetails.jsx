
import { useState } from "react";
import BookingForm from "../BookingForm/BookingForm";
import Reviews from "../Reviews/Reviews";
import css from "./CamperDetails.module.css";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
// Add other icons for amenities as needed

const CamperDetails = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  const amenities = [
    { key: "adults", label: "adults", icon: null }, // adults usually treated as amenity in UI
    { key: "transmission", label: "", icon: null },
    { key: "engine", label: "", icon: null },
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

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2 className={css.name}>{camper.name}</h2>
        <div className={css.subHeader}>
            <span className={css.rating}><FaStar color="#FFC531" /> {camper.rating} ({camper.reviews.length} Reviews)</span>
            <span className={css.location}><FaMapMarkerAlt /> {camper.location}</span>
        </div>
        <h3 className={css.price}>€{Number(camper.price).toFixed(2).replace('.', ',')}</h3>
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
            <div className={css.featuresTab}>
               <div className={css.amenities}>
                  {amenities.map(item => {
                      if (camper[item.key]) {
                          return (
                              <div key={item.key} className={css.amenity}>
                                  {/* Icon would go here */}
                                  <span>{item.label || camper[item.key]}</span> 
                                  {/* For transmission/engine value is string, for AC/kitchen it's boolean so use label */}
                                  {/* Actually logic: if boolean true, show label. If string, show string value. 
                                      Special case: adults is number -> '3 adults' */}
                                  {typeof camper[item.key] === 'boolean' ? '' : (item.key === 'adults' ? ' adults' : '')}
                              </div>
                          )
                      }
                      return null;
                  })}
               </div>
               
               <h3 className={css.detailsTitle}>Vehicle details</h3>
               <ul className={css.detailsList}>
                 {vehicleDetails.map((detail, index) => (
                   <li key={index} className={css.detailItem}>
                     <span>{detail.label}</span>
                     <span>{detail.value}</span>
                   </li>
                 ))}
               </ul>
            </div>
          )}
          {activeTab === "reviews" && <Reviews reviews={camper.reviews} />}
        </div>
        <div className={css.bookingFormWrapper}>
            <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
