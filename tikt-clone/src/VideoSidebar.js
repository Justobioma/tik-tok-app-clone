import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  const [messaged, setMessaged] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
        {/* If liked, increment by 1; otherwise
        leave unchanged */}
      </div>
      <div className="videoSidebar_button">
        <MessageIcon fontSize="large" />
        <p>{messaged ? messages + 1 : messages}</p>
        {/*if messaged, increment by
        1; otherwise leave unchanged */}
      </div>
      <div className="videoSidebar_button">
        <ShareIcon fontSize="large" />
        <p>{shared ? shares + 1 : shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
