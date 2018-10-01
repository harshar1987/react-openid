import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Header from "../components/home/Header";
import FindMeetings from "../components/meeting/FindMeetings";
import LatestMeetings from "../components/meeting/LatestMeetings";
import Boards from "../components/board/Boards";

import meetingsData from "../services/meetingService";
import boardsData from "../services/boardService";

import "../site.css";
import "../vendors/grid.css";
import "../vendors/normalize.css";
import "../styles/app.css";
import "../styles/content.css";

library.add(fab);

export const HomePage = () => {
  return (
    <div className="App">
      <Header FontAwesomeIcon={FontAwesomeIcon} faLibrary={library} />
      <div className="flexBox content">
        <div className="col span-1-of-2 meetings">
          <FindMeetings
            meetingsData={meetingsData}
            FontAwesomeIcon={FontAwesomeIcon}
            faLibrary={library}
          />
          <LatestMeetings
            meetingsData={meetingsData}
            FontAwesomeIcon={FontAwesomeIcon}
            faLibrary={library}
          />
        </div>
        <div className="col span-1-of-2 boards">
          <Boards
            boardsData={boardsData}
            FontAwesomeIcon={FontAwesomeIcon}
            faLibrary={library}
          />
        </div>
      </div>
    </div>
  );
};


