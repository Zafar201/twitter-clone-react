import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div className="tweetBox"> 
            <form>
                <div className="tweetBox__input">
                   <Avatar src="https://avatars3.githubusercontent.com/u/68781759?s=60&v=4"/>
                   <input placeholder="whats Happening" type="text"/>    
                </div>
                <input  className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
