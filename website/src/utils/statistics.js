import fs from 'fs';
import path from 'path';

const reviewsDataPath = path.join(__dirname, '../data/reviews.json');

export const getStatistics = () => {
  const rawData = fs.readFileSync(reviewsDataPath);
  const reviews = JSON.parse(rawData);

  const totalReviews = reviews.length;
  const totalMovies = new Set(reviews.map(review => review.movieTitle)).size;
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews).toFixed(2);

  const reviewsPerYear = {};
  reviews.forEach(review => {
    const year = new Date(review.date).getFullYear();
    if (!reviewsPerYear[year]) {
      reviewsPerYear[year] = 0;
    }
    reviewsPerYear[year]++;
  });

  return {
    totalReviews,
    totalMovies,
    averageRating,
    reviewsPerYear
  };
};