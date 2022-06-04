import React from "react";
import "./Online.css";

const Online = (props) => {
    const user=props.user;
  return (
    
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username} </span>
      </li>
    
  );
};

export default Online;
