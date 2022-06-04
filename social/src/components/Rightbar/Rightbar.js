import React from 'react';
import './Rightbar.css';
import {Users} from '../../FakeData';
import Online from '../Online/Online';

const Rightbar = () => {
    return (
        <div className='rightBar'>
            <div className="rightBarWrapper">
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Tansir Afridi</b> and <b>3 others friends</b> have birthday today
                    </span>
                </div>
                <img src="/assets/ad2.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(user=><Online user={user}></Online>)}
                    
                </ul>
            </div>
        </div>
    );
};

export default Rightbar;