import { FiShoppingCart } from "react-icons/fi";
import "./header.css";

export default function Header({ handleSideBar }) {
  return (
    <>
      <header>
        <p>Sora</p>
        <FiShoppingCart onClick={handleSideBar} />
      </header>
    </>
  );
}
