import { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";

import GameItem from "./GameItem";

export default function Catalogue() {
  const [gameData, setGameData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const games = async () => {
      setLoad(true);
      const data = await (
        await fetch(
          "https://api.rawg.io/api/games?key=4a2146c38a774505ad27bd1366b701f6",
          {
            mode: "cors",
          }
        )
      ).json();
      /* console.dir(data.results[0]); */
      setGameData(data.results);
      setLoad(false);
    };

    games();
  }, []);

  if (load)
    return (
      <div id="gameCatalogue">
        <FallingLines color="black" />;
      </div>
    );

  return (
    <>
      <div id="gameCatalogue">
        <h1 className="catalogueTitle">Catalogue</h1>
        {gameData.map((game) => (
          <GameItem
            title={game.name}
            image={game.background_image}
            key={game.id}
            rating={game.rating}
          />
        ))}
        {/* <GameItem
          title={"GTA 5"}
          image={
            "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
          }
        /> */}
      </div>
    </>
  );
}
