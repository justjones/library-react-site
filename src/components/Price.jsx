import React from "react";

const Price = ({ salePrice, originalPrice }) => {

    // Check if originalPrice is null or undefined

    if (originalPrice === null || originalPrice === undefined) {
        return <div className="book__price">Price not available</div>;
    }

    return (
        <div className="book__price">
            {salePrice ? (
                <>

                    <span className="book__price--normal">

                        ${originalPrice.toFixed(2)}

                    </span>

                    ${salePrice.toFixed(2)}

                </>

            ) : (

                <>${originalPrice.toFixed(2)}</>

            )}
        </div>
    );
};



export default Price;