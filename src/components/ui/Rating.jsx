import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";



const Rating = ({ rating = 0 }) => {

    // Ensure rating is a valid number

    const validatedRating = Math.max(0, Math.min(5, Number(rating))); // Clamp rating between 0 and 5



    return (

        <div className="book__ratings">

            {new Array(Math.floor(validatedRating)).fill(0).map((_, index) => (

                <FontAwesomeIcon icon="star" key={index} />

            ))}

            {!Number.isInteger(validatedRating) && (

                <FontAwesomeIcon icon="star-half-alt" />

            )}

        </div>

    );

};



export default Rating;