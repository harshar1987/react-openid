import React from "react";
import "../../styles/meeting-list.css";

const MeetingListItems = props =>
  props.meetingsData.map(meeting => (
    <li className="meetingLink">
      <div className="meetingName">
        <span>{meeting.meetingName}</span>
      </div>
      <div className="meetingDate">
        <span>{meeting.meetingDate}</span>
        <span>{meeting.meetingTime}</span>
      </div>
    </li>
  ));

export default MeetingListItems;
