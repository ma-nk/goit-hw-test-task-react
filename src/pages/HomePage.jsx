
import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>Welcome to TravelTrucks</h1>
      <p className={css.subtitle}>
        Your adventure starts here. Rent the best campers for your next trip.
      </p>
      <Link to="/catalog" className={css.ctaButton}>
        View Now
      </Link>
    </div>
  );
};

export default HomePage;
