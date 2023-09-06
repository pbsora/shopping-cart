import style from "./css modules/SideBarItem.module.css";

export default function SideBarItem({ game }) {
  return (
    <div className={style.sideBarItem} key={game.key}>
      <img
        src={game.image}
        alt=""
        className={style.gameIcon}
        onClick={() => console.log(game)}
      />
      <div className={style.gameInfo}>
        <span>{game.title}</span>
        <span>$69.99</span>
      </div>
    </div>
  );
}
