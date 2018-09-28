import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { oidcProvider, UserManager } from "../../utils/oidc";
import siteInfo from "../../services/siteInfoService";

import "../../styles/header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.onMicrosoftLogin = this.onMicrosoftLogin.bind(this);
    this.props.faLibrary.add(faSearch);
  }

  onMicrosoftLogin(e) {
    e.preventDefault();
    this.storeLoginProvider(oidcProvider.AzureAd);
    const odicUserManager = UserManager.getInstance(oidcProvider.AzureAd);
    odicUserManager.signinRedirect();
  }

  storeLoginProvider(providerName) {
    localStorage.setItem("Provider", providerName);
  }

  render() {
    return (
      <header>
        <div className="flexBox">
          <div className="col span-4-of-12 flexBox siteLogo">
            <img src={siteInfo.logo} alt="Logo" />
          </div>
          <div className="col span-4-of-12 flexBox siteTitle">
            <cite>Political meetings and agenda</cite>
          </div>
          <div className="col span-4-of-12 flexBox siteLogin">
            <a className="btn btn-full" onClick={this.onMicrosoftLogin}>
              <this.props.FontAwesomeIcon icon={["fab", "windows"]} />
              Login with Microsoft
            </a>
          </div>
        </div>
        <div className="col span-2-of-2 bannerImage">
          <div className="col span-2-of-2 flexBox searchBox">
            <input id="q" name="searchField" placeHolder="Find a meeting" />
            <button type="submit">
              <this.props.FontAwesomeIcon icon="search" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
