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

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(book) {
    setCart ([...cart, {...book, quntity: 1}])
  }

  function changeQuantity(book){
    console.log(book.quntity);
  }
   
  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />}/>
        <Route path='/books/:id' render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path='/cart' render={() => <Cart books={books} />} cart={cart} />
        <Footer />        
      </div>
    </Router>
  );
}

export default App;
