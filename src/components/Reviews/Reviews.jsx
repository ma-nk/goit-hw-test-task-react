
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  return (
    <div className={css.reviewsContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={css.review}>
          <div className={css.reviewer}>
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0)}
            </div>
            <div>
              <p className={css.name}>{review.reviewer_name}</p>
              <p className={css.rating}>
                {"⭐".repeat(review.reviewer_rating)}
              </p>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
