import React from 'react';
import productPage from '../../productPage.module.scss';
import ReviewsItem from "./ReviewsItem";
import reviewersData from "../../../../mockData/reviewers";

function Reviews() {
    const reviewersComponents = reviewersData.map(review => <ReviewsItem key={review.id} name={review.name} rating={review.rating} dignity={review.dignity} flaws={review.flaws} comment={review.comment}/>)
    return (
        <div>
            <h5>Отзывы</h5>
            <div className={productPage.reviewsContainer}>
                {reviewersComponents}
            </div>
        </div>
    );
}
export default Reviews;