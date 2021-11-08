import { useState } from "react";
import BoardText from "./BoardText";

function Board(): JSX.Element {
  const [player1Turn, setPlayer1Turn] = useState<boolean>(true);
  const [noughtsWin, setNoughtsWin] = useState<boolean>(false);
  const [crossesWin, setCrossesWin] = useState<boolean>(false);

  const handleResetBoard = () => {
    console.log("Click to reset board");
  };
  return (
    <div className="Board-container">
      <h1 className="Board-header">TicTacToe</h1>
      <div>
        <table className="Board">{/* <tbody>{tblBoard}</tbody> */}</table>
      </div>
      <BoardText
        player1Turn={player1Turn}
        noughtsWin={noughtsWin}
        crossesWin={crossesWin}
      />
      <button className="Board-reset" onClick={handleResetBoard}>
        New Game
      </button>
    </div>
  );
}

export default Board;
