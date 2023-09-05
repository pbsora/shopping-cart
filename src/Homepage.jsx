import "./index.css";
import Header from "./components/header.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function Homepage() {
  const [sideBar, setSideBar] = useState(false);
  const [cart, setCart] = useState([]);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleCart = (game) => {
    setCart((prev) => {
      return [...prev, game];
    });
  };

  return (
    <>
      <Header handleSideBar={handleSideBar} cart={cart} />
      <Hero />
      <Catalogue sideBar={sideBar} handleCart={handleCart} />
      <Footer sideBar={sideBar} />
      {sideBar && (
        <SideBar sideBar={sideBar} handleSideBar={handleSideBar} cart={cart} />
      )}
    </>
  );
}
