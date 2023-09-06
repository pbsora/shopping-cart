import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { BiSolidDownArrow } from "react-icons/bi";
import styles from "./css modules/GameItem.module.css";

export default function GameItem({
  title,
  image,
  key,
  rating,
  handleCart,
  setCart,
}) {
  const [tab, setTab] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  const [parent] = useAutoAnimate();

  const handleTab = () => {
    setTab(!tab);
  };

  const handleAddCart = () => {
    setAddToCart(!addToCart);
  };

  const handleRemoveCart = (title) => {
    setCart((prev) => prev.filter((game) => game.title !== title));
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
        <br />
        {!tab && <BiSolidDownArrow />}
      </div>
      {tab && (
        <div className={styles.gameTav}>
          <hr className={styles.rounded} />
          <div className={styles.gameBuy}>
            <button
              className={addToCart ? styles.cancelBtn : styles.buyBtn}
              onClick={
                addToCart
                  ? () => {
                      handleRemoveCart(title), handleAddCart();
                    }
                  : () =>
                      handleCart(
                        {
                          title: title,
                          image: image,
                          rating: rating,
                          key: { key },
                        },
                        handleAddCart()
                      )
              }
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
