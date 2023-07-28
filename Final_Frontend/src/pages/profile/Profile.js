import "./profile.css";
import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import one from "./pro2.png";
import pro from "./fin.jpg.png"
import { useSelector } from "react-redux";

export default function Profile() {
  const username=useSelector((state)=>state.user.username)
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src= {pro}
                alt=""
              />
              <img
                className="profileUserImg"
                src= {one}
                alt=""
              />
            </div>
            <div className="profileInfo">
              
                <h4 className="profileInfoName">{username}</h4>


                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}