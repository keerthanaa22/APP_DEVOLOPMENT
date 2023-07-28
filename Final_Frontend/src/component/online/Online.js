import React from "react";
import "./Online.css";

import one from "./one.png"

import { Users } from "../../dummyData";

export default function Online() {
  return (
    <ul className="rightbarFriendList">
      <h2 className="on">ONLINE </h2>
      {Users.map((user) => (
        <div>
        <li className="rightbarFriend" key={user.id}>
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">{user.username}</span>
        </li>
        </div>
      ))}
    </ul>
  );
}
