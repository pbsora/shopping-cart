import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import styles from "./css modules/Footer.module.css";

export default function Footer({ sideBar }) {
  return (
    <footer>
      <div className={sideBar ? styles.footerHide : styles.footer}>
        <p>Sora</p>
        <a href="https://github.com/pbsora" target="_blank">
          <AiFillGithub />
        </a>

        <a href="#root">
          <BsFillArrowUpCircleFill className={styles.topButton} />
        </a>
      </div>
    </footer>
  );
}
