import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from './firebase'
function TweetBox() {
   const [tweetMessage,setTweetMessage] =useState("")
   const [tweetImage, setTweetImage] = useState("");

    
   const sendTweet = e => {
       e.preventDefault()

       db.collection("posts").add({
        displayName: "Zafar",
        username: "zafar_irshad",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://avatars3.githubusercontent.com/u/68781759?s=60&v=4",
      })

      setTweetMessage("")
    setTweetImage("")
   }

    return (
        <div className="tweetBox"> 
            <form>
                <div className="tweetBox__input">
                   <Avatar src="https://avatars3.githubusercontent.com/u/68781759?s=60&v=4"/>
                   <input 
                   onChange={(e) => setTweetMessage(e.target.value)}
                   value={tweetMessage} placeholder="whats Happening" type="text"/>    
                </div>
                <input  
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
                <Button 
                onClick={sendTweet}
                type="submit" className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
