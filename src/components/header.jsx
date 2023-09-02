import { FiShoppingCart } from "react-icons/fi";
import style from "./css modules/header.module.css";

export default function Header({ handleSideBar }) {
  return (
    <>
      <header>
        <p>Sora</p>
        <div className={style.cart} onClick={handleSideBar}>
          <FiShoppingCart className={style.cartIcon} />
          <span className={style.counter}>1</span>
        </div>
      </header>
    </>
  );
}
