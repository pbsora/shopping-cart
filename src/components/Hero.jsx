import Gif from "../assets/hero-mobile.gif";
import style from "./css modules/Hero.module.css";

export default function Hero() {
  return (
    <div className={style.heroContainer}>
      <img alt="" className={style.hero} />
      <button className={style.browseBtn}>
        <a href="#gameCatalogue">Browse games</a>
      </button>
    </div>
  );
}
