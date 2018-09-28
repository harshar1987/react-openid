import React from "react";
import "../../styles/board-list.css";

const BoardListItems = props =>
  props.boardsData.map(board => (
    <li className="boardLink">
      <div className="boardName">
        <span>{board.boardName}</span>
      </div>
    </li>
  ));

export default BoardListItems;
