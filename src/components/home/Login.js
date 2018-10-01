import React from "react";

export const Login = (props) => {
    return ( <div className="col span-4-of-12 flexBox siteLogin">
                <a className="btn btn-full" onClick={props.onMicrosoftLogin}>
                    <props.FontAwesomeIcon icon={["fab", "windows"]} />
                    Login with Microsoft
                </a>
            </div>);
};

