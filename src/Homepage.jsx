import "./index.css";
import Header from "./components/header.jsx";
import Catalogue from "./components/Catalogue.jsx";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useState } from "react";

export default function Homepage() {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    setSideBar(!sideBar);
    console.log(sideBar);
  };

  return (
    <>
      <Header handleSideBar={handleSideBar} />
      <Hero />
      <Catalogue sideBar={sideBar} />
      <Footer sideBar={sideBar} />
      {sideBar && <SideBar sideBar={sideBar} handleSideBar={handleSideBar} />}
    </>
  );
}
