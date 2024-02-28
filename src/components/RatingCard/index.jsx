import React from 'react';
import { CardContainer } from './Rating.style';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import ThankYouCard from '../ThankYouCard';

export default function RatingCard() {

	const [rating, setRating] = useState();
	const [isSubmited, setIsSubmited] = useState(false);

	const handleSetRating = (rating) => {
		setRating(rating);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(rating === undefined) return

		setIsSubmited(true)
		console.log('indo pro back')
	}

	if(isSubmited) {
		return <ThankYouCard selectedRating={rating}/>
	}

    return (
      <CardContainer>
		<form onSubmit={handleSubmit}>
			<div className='box-star'>
				<div>
					<AiFillStar className='star'/>
				</div>
			</div>
			<div className='box-info'>
				<h2>How did we do?</h2>
				<p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
			</div>
			
			<div className='box-rating-btn'>
				{[1,2,3,4,5].map((rating) =>  (
					<button type='button' onClick={() => handleSetRating(rating)} key={rating}>{rating}</button>
				))}
			</div>
			<button type='submit' className='btn-submit'>submit</button>
		</form>
      </CardContainer>
    );
}
