import React from "react";
import { oidcProvider, UserManager } from "../../utils/oidc";
import { connect } from "react-redux";

import {Login} from "./Login";
import {Logout} from "./Logout";

import siteInfo from "../../services/siteInfoService";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
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

  onMicrosoftLogout(e){
    e.preventDefault();
    const odicUserManager = UserManager.getInstance(oidcProvider.AzureAd);
    odicUserManager.removeUser()
  }

  storeLoginProvider(providerName) {
    localStorage.setItem("Provider", providerName);
  }

  render() {

    const {user} = this.props;

    return (
      <header>
        <div className="flexBox">
          <div className="col span-4-of-12 flexBox siteLogo">
            <img src={siteInfo.logo} alt="Logo" />
          </div>
          <div className="col span-4-of-12 flexBox siteTitle">
            <cite>Political meetings and agenda</cite>
          </div>
          {!user || user.expired ? 
          <Login FontAwesomeIcon={this.props.FontAwesomeIcon} onMicrosoftLogin={this.onMicrosoftLogin} /> 
          : <Logout onMicrosoftLogout={this.onMicrosoftLogout}/>}
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

const mapStateToProps = state => ({ user: state.oidc.user })

const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(Header);


