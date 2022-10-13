import React from "react";
import Board from "./board";
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
class Game extends React.Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepsNumber: 0,
    xIsNext: true,
  };
  handelClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepsNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "x" : "o";
    this.setState({
      history: history.concat([{ squares }]),
      stepsNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  };
  jumpTo = (step) => {
    this.setState({
      stepsNumber: step,
      xIsNext: step % 2 === 0,
    });
  };
  render() {
    const history = this.state.history;
    const current = history[this.state.stepsNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((_, move) => {
      const desc = move ? "go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status = "";
    if (winner) {
      status = "Winner of this game is = " + winner;
    } else {
      status = " Next Player =  " + (this.state.xIsNext ? "x" : "o");
    }
    return (
      <div>
        <div className="aline-men">
          <h2>Tik tak teo</h2>
          <Board onClick={this.handelClick} squares={current.squares} />
        </div>
        <div className="allStatus">
          {" "}
          <div className="status-fil">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
