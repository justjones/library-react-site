import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";
import CheckoutPage from "./Pages/CheckoutPage"; 

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter((book) => book.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo books={books} addToCart={addToCart} cart={cart} changeQuantity={changeQuantity} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
          )}
        />
        <Route
          path="/checkout" // ✅ Added Checkout Route
          render={() => <CheckoutPage cart={cart} />} // ✅ Pass cart data
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
