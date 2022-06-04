import React from "react";
import Feed from "../../../components/Feed/Feed";
import Rightbar from "../../../components/Rightbar/Rightbar";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">fdfsfs</div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
