import React from 'react';
import './Share.css';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LabelIcon from '@material-ui/icons/Label';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

const Share = () => {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/piash.jpg" alt="" />
                    <input placeholder='Whats in your mind' className='shareInput' />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor='green' className='shareIcon'/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareIcon'/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <RoomIcon htmlColor='tomato' className='shareIcon'/>
                            <span className="shareOptionText">Check In</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='yellow' className='shareIcon'/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Post</button>
                </div>
            </div>
        </div>
    );
};

export default Share;