import React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";
import ReviewList from "../components/ReviewList";

const IndexPage = () => {
  return (
    <main>
      <SEO />
      <h1>Welcome to Movie Reviews</h1>
      <p>I want you to act as a movie critic. You will develop an engaging and creative movie review. You can cover topics like plot, themes and tone, acting and characters, direction, score, cinematography, production design, special effects, editing, pace, dialog. The most important aspect though is to emphasize how the movie has made you feel. What has really resonated with you. You can also be critical about the movie. Please avoid spoilers. My first request is "I need to write a movie review for the movie Interstellar"</p>
      <Link to="/review">Write a Review</Link>
      <ReviewList />
      <Link to="/admin">Admin Dashboard</Link>
    </main>
  );
};

export default IndexPage;