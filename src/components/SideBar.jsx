import styles from "./css modules/SideBar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import SideBarItem from "./SideBarItem";

export default function SideBar({ sideBar, handleSideBar }) {
  return (
    <div className={sideBar ? styles.sidebar : styles.sidebarClosed}>
      <div className={styles.top}>
        <AiOutlineClose onClick={handleSideBar} />
        <p>Cart preview</p>
      </div>
      <div className={styles.cartItems}>
        <SideBarItem />
        <SideBarItem />
        <SideBarItem />
      </div>
      <div className={styles.sideFooter}>
        <span>
          Total: <br></br> $69.99
        </span>
        <button>Checkout</button>
      </div>
    </div>
  );
}
