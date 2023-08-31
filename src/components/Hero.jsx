import Gif from "../assets/hero-mobile.gif";

export default function Hero() {
  return (
    <div className="heroContainer">
      <img src={Gif} alt="" className="hero" />
      <button className="browseBtn">
        <a href="#gameCatalogue">Browse games</a>
      </button>
    </div>
  );
}
