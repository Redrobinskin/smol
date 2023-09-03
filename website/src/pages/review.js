import React from 'react';
import { graphql } from 'gatsby';
import ReviewItem from '../components/ReviewItem';
import SEO from '../components/SEO';

export const query = graphql`
  query($slug: String!) {
    reviewsJson(slug: { eq: $slug }) {
      title
      year
      rating
      director
      review
      slug
    }
  }
`;

const ReviewPage = ({ data }) => {
  const review = data.reviewsJson;
  return (
    <div>
      <SEO title={review.title} description={review.review} />
      <ReviewItem review={review} />
    </div>
  );
};

export default ReviewPage;