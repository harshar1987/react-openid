import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import BoardListItems from "./BoardListItems";
import "../../styles/boards.css";

const Boards = props => {
  const { boardsData, ...rest } = props;

  rest.faLibrary.add(faBriefcase);

  return (
    <div className="boards">
      <div className="boards-Header">
        <rest.FontAwesomeIcon icon="briefcase" />
        <h2>Boards</h2>
      </div>
      <div className="boards-List">
        <ul>
          <BoardListItems boardsData={boardsData} />
        </ul>
      </div>
      <div className="boards-ViewMore" />
    </div>
  );
};

export default Boards;
