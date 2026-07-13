import css from "./EmptyState.module.css";
import noCampersImg from "../../assets/no_campers.png";

const EmptyState = ({ onClear }) => {
  return (
    <div className={css.container}>
      <img src={noCampersImg} alt="No campers found" className={css.image} />
      <h2 className={css.title}>No campers found</h2>
      <p className={css.text}>
        We couldn`t find any campers that match your filters.
        <br />
        Try adjusting your search or clearing some filters.
      </p>
      <div className={css.buttonGroup}>
        <button className={css.clearButton} onClick={onClear}>
          ✕ Clear filters
        </button>
        <button className={css.viewAllButton} onClick={onClear}>
          View all campers
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
