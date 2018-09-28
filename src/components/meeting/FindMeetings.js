import React from "react";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import MeetingListItems from "./MeetingListItems";
import "../../styles/find-meetings.css";

const meetingYears = ["2015", "2017", "2018"];
const meetingYearOptions = meetingYears.map(year => <option>{year}</option>);

const meetingMonths = ["Jan", "Feb", "March", "April"];
const meetingMonthOptions = meetingMonths.map(month => (
  <option>
    <span style={{ backgroundColor: "red" }}>{month}</span>
  </option>
));

const FindMeetings = props => {
  const { meetingsData, ...rest } = props;

  rest.faLibrary.add(faCalendarAlt);

  return (
    <div className="findMeetings">
      <div className="findMeetings-Header">
        <rest.FontAwesomeIcon icon="calendar-alt" />
        <h2>Find meetings</h2>
      </div>
      <div className="findMeetings-Container">
        <div className="col span-1-of-3 selectedYear">
          <span className="label">From Date</span>
          <select className="comboBox comboBox-year">
            {meetingYearOptions}
          </select>
        </div>
        <div className="col span-2-of-3 selectedMonth">
          <span className="label">To Date</span>
          <select className="comboBox comboBox-month">
            {meetingMonthOptions}
          </select>
        </div>
        <div className="col span-3-of-3 selectedDate">
          <i className="label">3 meeting found for month Jan</i>
        </div>
      </div>
      <div className="findMeetings-List">
        <ul>
          <MeetingListItems meetingsData={meetingsData} />
        </ul>
      </div>
    </div>
  );
};

export default FindMeetings;
