import React, { useState } from "react";

const Review = ({ reviews }) => {
  const [reviewNum, setReviewNum] = useState(0);
  const noOfReviews = reviews.length;

  const randomReview = () => Math.floor(Math.random() * noOfReviews);

  return (
    <div>
      <img src={reviews[reviewNum].image} alt={reviews[reviewNum].name} />
      <h2>{reviews[reviewNum].name}</h2>
      <h4>{reviews[reviewNum].job}</h4>
      <p>{reviews[reviewNum].text}</p>
      <button
        onClick={() =>
          reviewNum === 0
            ? setReviewNum(noOfReviews - 1)
            : setReviewNum(reviewNum - 1)
        }
      >{`<`}</button>
      <button
        onClick={() =>
          reviews[reviewNum + 1] ? setReviewNum(reviewNum + 1) : setReviewNum(0)
        }
      >{`>`}</button>
      <br />
      <button onClick={() => setReviewNum(randomReview())}>Surprise Me</button>
    </div>
  );
};

export default Review;
