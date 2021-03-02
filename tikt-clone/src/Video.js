import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares, // these will be passed through in as props
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      {/* <VideoFooter/> */}

      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      {/* <VideoSidebar/> */}
    </div>
  );
}

export default Video;
