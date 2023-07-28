import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">HuntL</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Bookmark</span>
        </div> */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <Link to="/online"><Person className="topbar-person" style={{fontSize:"25px"}}/></Link>
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          
          <div className="topbarIconItem">
            <Link to="/notification"><Notifications className="topbar-person" style={{fontSize:"25px"}}/></Link>
            {/* <span className="topbarIconBadge">1</span> */}
          </div>
          <div className="topbarLinks">
          <Link to="userpro"><span className="topbarLink"><button className="logout-button">Profile</button></span></Link>
          <Link to="/"><span className="topbarLink"><button className="logout-button">Logout</button></span></Link>
        </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}