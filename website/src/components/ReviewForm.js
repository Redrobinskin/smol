import React, { useState } from 'react';

const ReviewForm = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      title,
      year,
      review,
    };
    // submitReview function to be defined in parent component or context
    submitReview(reviewData);
  };

  return (
    <form id="reviewForm" onSubmit={handleSubmit}>
      <label>
        Movie Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Year:
        <input type="number" min="1990" max="2023" value={year} onChange={(e) => setYear(e.target.value)} required />
      </label>
      <label>
        Your Review:
        <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
      </label>
      <input type="submit" value="Submit Review" />
    </form>
  );
};

export default ReviewForm;