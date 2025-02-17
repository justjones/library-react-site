import React from 'react';
import { Link } from "react-router-dom";

const CheckoutPage = ({ cart }) => {
  // Function to calculate total price
  const total = () => {
    let price = 0;
    cart.forEach(item => {
      price += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return price;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Checkout</h2>
            </div>

            {/* Checkout Summary */}
            <div className="cart__body">
              {cart.length > 0 ? (
                cart.map((book) => (
                  <div className="cart__item" key={book.id}>
                    <div className="cart__book">
                      <img src={book.url} alt={book.title} className="cart__book--img" />
                      <div className="cart__book--info">
                        <span className="cart__book--title">{book.title}</span>
                        <span className="cart__book--price">
                          ${(book.salePrice || book.originalPrice).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <span>Qty: {book.quantity}</span>
                    </div>
                    <div className="cart__total">
                      ${(book.salePrice || book.originalPrice * book.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="cart__empty">
                  <h2>Your cart is empty!</h2>
                  <Link to="/books">
                    <button className="btn">Browse books</button>
                  </Link>
                </div>
              )}
            </div>

            {/* Order Total Summary */}
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${(total() * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(total() * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${total().toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="checkout__buttons">
              <Link to="/cart">
                <button className="btn">Back to Cart</button>
              </Link>
              <button className="btn btn__checkout no-cursor" disabled>
                Place Order (Demo Only)
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;
