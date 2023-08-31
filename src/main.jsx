import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Catalogue />
    <Footer />
  </React.StrictMode>
);
