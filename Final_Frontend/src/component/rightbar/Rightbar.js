import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import one from "./one.jpg"
import two from "./two.jpg"
import three from "./three.jpg"
import four from "./four.jpg"
import five from "./five.jpg"
import six from "./six.jpg"

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Coimbatore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Chennai</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={one}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Abisree D</span>
          </div>


          <div className="rightbarFollowing">
            <img
              src={two}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Deepika T</span>
          </div>

          
          <div className="rightbarFollowing">
            <img
              src={three}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Bhuvaneshwari </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={five}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ajay Navaneeth GR</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={six}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harshid R</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={four}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tejaswini</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}