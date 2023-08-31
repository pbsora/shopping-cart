import style from "./css modules/SideBarItem.module.css";

export default function SideBarItem() {
  return (
    <div className={style.sideBarItem}>
      <img
        src="https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        alt=""
      />
      <div className={style.gameInfo}>
        <span>The Witcher 3</span>
        <span>$69.99</span>
      </div>
    </div>
  );
}
