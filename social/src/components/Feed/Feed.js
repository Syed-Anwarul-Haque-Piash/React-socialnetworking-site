import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
import {Posts} from '../../FakeData';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share></Share>
                {Posts.map((p)=>
                <Post key={p.id} post={p}></Post>)}
                
                
            </div>
        </div>
    );
};

export default Feed;