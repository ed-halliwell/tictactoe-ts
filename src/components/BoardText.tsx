interface Props {
  player1Turn: boolean;
  noughtsWin: boolean;
  crossesWin: boolean;
}

function BoardText(props: Props): JSX.Element {
  {
    if (props.noughtsWin === true) {
      return <h4>Noughts Win!</h4>;
    } else if (props.crossesWin === true) {
      return <h4>Crosses Win!</h4>;
    } else {
      return (
        <h4>{props.player1Turn ? "Player 1's turn" : "Player 2's turn"}</h4>
      );
    }
  }
}

export default BoardText;
