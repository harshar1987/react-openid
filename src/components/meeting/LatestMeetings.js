import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import MeetingListItems from "./MeetingListItems";
import "../../styles/latest-meetings.css";

const LatestMeetings = props => {
  const { meetingsData, ...rest } = props;

  rest.faLibrary.add(faBriefcase);

  return (
    <div className="latestMeetings">
      <div className="latestMeetings-Header">
        <rest.FontAwesomeIcon icon="briefcase" />
        <h2>My Latest Meetings</h2>
      </div>
      <div className="latestMeetings-List">
        <ul>
          <MeetingListItems meetingsData={meetingsData} />
        </ul>
      </div>
      <div className="latestMeetings-ViewMore" />
    </div>
  );
};

export default LatestMeetings;
