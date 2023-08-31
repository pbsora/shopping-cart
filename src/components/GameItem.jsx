import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiSolidDownArrow } from "react-icons/bi";
import styles from "./css modules/GameItem.module.css";

export default function GameItem({ title, image, key, rating }) {
  const [tab, setTab] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [parent] = useAutoAnimate();

  const handleTab = () => {
    setTab(!tab);
  };

  const handleAddCart = () => {
    setAddToCart(!addToCart);
  };

  return (
    <div className={styles.gameItem + " gameIt"} key={key} ref={parent}>
      <img src={image} className={styles.gameImage} />
      <div className={styles.gameInfo}>
        <h1 className={styles.gameTitle}>{title}</h1>
        <span className={styles.gamePrice}>$69.99</span>
        <span className={styles.gameRating}>Rating: {" " + rating}</span>
      </div>
      <div className={styles.toggleTab} onClick={handleTab}>
        {!tab && <BiSolidDownArrow />}
      </div>
      {tab && (
        <div className={styles.gameTav}>
          <hr className={styles.rounded} />
          <div className={styles.gameBuy}>
            <button
              className={addToCart ? styles.cancelBtn : styles.buyBtn}
              onClick={handleAddCart}
            >
              {addToCart ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
          <div className={styles.toggleTabOpen} onClick={handleTab}>
            {tab && <BiSolidDownArrow />}
          </div>
        </div>
      )}
    </div>
  );
}
