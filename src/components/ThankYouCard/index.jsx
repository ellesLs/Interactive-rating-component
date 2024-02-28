import React from 'react'
import { CardContainerThanks } from './ThankYou.style'

export default function ThankYouCard({ selectedRating }) {
    return (
        <CardContainerThanks>
            <img  src='/images/illustration-thank-you.svg' alt='cellphone'/>
            <div className='selected-info'>
                <p>You selectd {selectedRating} out of 5</p>
            </div>

            <div className='box-info'>
                <h2>Thank You!</h2>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </CardContainerThanks>
    )
}
