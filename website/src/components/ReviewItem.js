import React from 'react';
import PropTypes from 'prop-types';

const ReviewItem = ({ review }) => {
  return (
    <div id="reviewItem" className="review-item">
      <h2>{review.title}</h2>
      <p>{review.year}</p>
      <p>{review.critic}</p>
      <p>{review.review}</p>
    </div>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    critic: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;