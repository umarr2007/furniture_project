import React from "react";
import Hero from "./components/Hero/Hero";
import Range from "./components/Range/Range";
import Product from "./components/Product/Product";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Rooms from "./components/Rooms/Rooms";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import ProductId from "./pages/ProductId/ProductId";
import Checkout from "./pages/Checkout/Checkout";
import Comparasion from "./pages/Comparasion/Comparasion";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Layout />
            <Hero />
            <Range />
            <Product />
            <Rooms />
            <Footer />
          </div>
        }
      />

      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/productid" element={<ProductId />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/comparasion" element={<Comparasion />} />
    </Routes>
  );
}

export default App;
