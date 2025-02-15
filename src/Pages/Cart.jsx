import React from "react";

const Cart = (cart) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selectd--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                        </div>
                        <div className="cart__body">
                        {cart.map((book) => (
                        <div className="cart__item" key={book.id}>
                            <div className="cart__book">
                                <img src={book.url} alt="" className="cart__book--img" />
                                <div className="cart__book--info">
                                    <span className="cart__book--title">{book.title}</span>
                                    <span className="cart__book--price">${book.salePrice || book.originalPrice}</span>
                                    <button className="cart__book--remove">Remove</button>
                                </div>
                            </div>
                            <div className="cart__quanitiy">
                                <input type="number" min={0} max={99} className="cart__input" />
                            </div>
                            <div className="cart__total">$10.00</div>
                        </div>
                    ))}
    

                        </div>
                    </div>
                    <div className="total">
                        <div className="total__item total__sub-total">
                            <span>Subtotal</span>
                            <span>$9.00</span>
                        </div>
                        <div className="total__item total__tax">
                            <span>Tax</span>
                            <span>$1.00</span>
                        </div>
                        <div className="total__item total__price">
                            <span>Total</span>
                            <span>$10.00</span>
                        </div>
                        <button className="btn btn__checkout no-cursor"
                            onClick={() => alert(`haven"t gotton around to doing it yet`)}>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart;