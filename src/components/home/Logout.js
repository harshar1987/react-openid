import React from "react";

export const Logout = (props) => {

    return (
        <div className="col span-4-of-12 flexBox siteLogin">
        <span>{props.fullName}</span>
        <a className="btn btn-full" onClick={props.onMicrosoftLogout}>
              Logout
          </a>
    </div>
    );
};
