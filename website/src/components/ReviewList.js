import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ReviewItem from './ReviewItem';

const ReviewList = () => {
  const data = useStaticQuery(graphql`
    query {
      allReviewsJson(sort: { fields: [year], order: DESC }) {
        edges {
          node {
            id
            title
            year
            review
          }
        }
      }
    }
  `);

  return (
    <div id="reviewList">
      {data.allReviewsJson.edges.map(({ node }) => (
        <ReviewItem key={node.id} review={node} />
      ))}
    </div>
  );
};

export default ReviewList;