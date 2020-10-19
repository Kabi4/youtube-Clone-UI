import React, { Component } from "react";
import "./Header.css";
import Logo from "../../Assets/Logo.png";

import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import NotificationsSharpIcon from "@material-ui/icons/NotificationsSharp";
import { Avatar } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
  state = {
    serachInput: "",
  };

  searchInputHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() !== "" || e.target.value.length === 0) {
      this.setState({ serachInput: e.target.value });
    }
  };

  onSearchHandler = (e) =>{
    e.preventDefault();
    if(this.state.serachInput.trim()!==""){
        this.props.history.push(`/search/for&temp?equalsto=${this.state.serachInput}`)
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__left">
          <MenuSharpIcon />
          <Link to="/">
            <img className="header__left__img" alt="OUR LOGO" src={Logo} />
          </Link>
        </div>
        <div className="header__center">
          <input
            type="test"
            placeholder="Search In YouTube"
            value={this.state.serachInput}
            onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    this.onSearchHandler(e);
                }
            }}
            onChange={(e) => {
              this.searchInputHandler(e);
            }}
          />
          <SearchSharpIcon onClick={(e)=>{this.onSearchHandler(e);}}  />
        </div>
        <div className="header__right">
          <VideoCallSharpIcon />
          <AppsSharpIcon />
          <NotificationsSharpIcon />
          <Avatar alt="Avatar" src="" />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
