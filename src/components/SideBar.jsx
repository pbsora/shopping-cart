import styles from "./css modules/SideBar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import SideBarItem from "./SideBarItem";

export default function SideBar({ sideBar, handleSideBar, cart }) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <AiOutlineClose onClick={handleSideBar} />
        <p>Cart preview</p>
      </div>
      <div className={styles.cartItems}>
        {cart.map((item) => (
          <SideBarItem game={item} />
        ))}
      </div>
      <div className={styles.sideFooter}>
        <span>
          Total: <br></br> {"$" + 
          cart.length * 69}
        </span>
        <button>Checkout</button>
      </div>
    </div>
  );
}
