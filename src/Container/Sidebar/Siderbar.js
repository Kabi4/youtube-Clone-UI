import React, { Component } from "react";
import Sidebarrow from "../../Components/SidebarRow/Sidebarrow";
import "./Sidebar.css";
import HomeSharp  from "@material-ui/icons/HomeSharp"
import WhatshotSharp from "@material-ui/icons/WhatshotSharp"
import SubscriptionsSharp from "@material-ui/icons/SubscriptionsSharp"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import History from "@material-ui/icons/History"
import OndemandVideo from "@material-ui/icons/OndemandVideo"
import WatchLater from "@material-ui/icons/WatchLater"
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined"
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"


class Siderbar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Sidebarrow 
                    icons = {[[HomeSharp,"Home"],[WhatshotSharp,"Trending"],[SubscriptionsSharp,"Subscriptions"]]}
                    />
        <Sidebarrow 
                    icons = {[[VideoLibraryIcon,"Library"],[History,"History"],[OndemandVideo,"Your Videos"],[WatchLater,"Watch Later"],[ThumbUpAltOutlined,"Liked Videos"],[ExpandMoreOutlined,"Show More"]]}
                    />
      </div>
    );
  }
}

export default Siderbar;
