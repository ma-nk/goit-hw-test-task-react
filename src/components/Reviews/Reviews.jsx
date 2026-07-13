
import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        color={index < rating ? "#FFC531" : "#F2F4F7"}
        size={16}
      />
    ));
  };

  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index} className={css.review}>
          <div className={css.reviewer}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0)}
            </div>
            <div className={css.info}>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.rating}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
