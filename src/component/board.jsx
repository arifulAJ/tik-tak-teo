import React from "react";
import Square from "./square";

const Board = (props) => {
  const renderSquare = (i) => (
    <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  );
  return (
    <div className="aline-men">
      <div className="board-aline">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-aline">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-aline">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
