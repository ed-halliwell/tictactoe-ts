import { useState } from "react";
import BoardText from "./BoardText";
import Square from "./Square";
import { checkCrossesWin, checkNoughtsWin } from "../utils/winConditions";
import "../styles/Board.css";

export default function Board(): JSX.Element {
  const [player1Turn, setPlayer1Turn] = useState<boolean>(true);
  const [noughtsWin, setNoughtsWin] = useState<boolean>(false);
  const [crossesWin, setCrossesWin] = useState<boolean>(false);
  const [board, setBoard] = useState<any>([]);

  const createBoard = () => {
    const board = [];
    for (let y = 0; y < 3; y++) {
      const row = [];
      for (let x = 0; x < 3; x++) {
        row.push(1);
      }
      board.push(row);
    }
    return board;
  };
  createBoard();

  const handleResetBoard = () => {
    setPlayer1Turn(true);
    setNoughtsWin(false);
    setCrossesWin(false);
    setBoard([]);
  };

  const takeTurn = (coord: string) => {
    const [y, x]: number[] = coord.split("-").map(Number);

    function updateSquare(y: number, x: number): void {
      if (player1Turn) {
        board[y][x] = 2;
      } else {
        board[y][x] = 3;
      }
    }
    updateSquare(y, x);

    setPlayer1Turn(!player1Turn);
    setNoughtsWin(checkNoughtsWin(board));
    setCrossesWin(checkCrossesWin(board));
    setBoard(board);
  };

  const renderBoard = () => {
    const tblBoard: any[] = [];
    for (let y = 0; y < 3; y++) {
      const row = [];
      for (let x = 0; x < 3; x++) {
        const coord = `${y}-${x}`;
        row.push(
          <Square
            squareVal={1}
            key={coord}
            takeTurn={() => takeTurn(coord)}
            disabled={1 !== 1}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return tblBoard;
  };

  return (
    <div className="Board-container">
      <h1 className="Board-header">TicTacToe</h1>
      <div>
        <table className="Board">
          <tbody>{renderBoard()}</tbody>
        </table>
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
