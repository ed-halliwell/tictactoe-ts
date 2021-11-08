interface Props {
  player1Turn: boolean;
  noughtsWin: boolean;
  crossesWin: boolean;
}

export default function BoardText(props: Props): JSX.Element {
  if (props.noughtsWin) return <h4>Noughts Win!</h4>;
  else if (props.crossesWin) return <h4>Crosses Win!</h4>;
  else if (props.player1Turn) return <h4>Player 1's turn</h4>;
  else if (!props.player1Turn) return <h4>Player 2's turn</h4>;
  else return <h4>Nothing</h4>;
}
