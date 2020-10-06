import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName,userName,verified,text,image,avatar}) {
    return (
       <div className="post">
            <div className="post__avatar">
               <Avatar src="https://avatars3.githubusercontent.com/u/68781759?s=60&v=4"/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                       <h3>ZAFAR IRSHAD{""}<span className="post__headerSpecial"> <VerifiedUserIcon className="post__badge"/>@zafar201</span></h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenged u to build twitter clone react</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
                <div className="post__footer">
                     <ChatBubbleOutlineIcon fontSize="small"/>
                     <RepeatIcon fontSize="small"/>
                     <FavoriteBorderIcon  fontSize="small"/>
                     <PublishIcon  fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
