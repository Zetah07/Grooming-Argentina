import axios from "../../../api/axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import "./studentsPlayer.css";

export default function StudentsPlayer() {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [title, setTitle] = useState("");
  const { REACT_APP_ACCESS_TOKEN } = process.env;

  const handleReady = (player) => {
    setTitle(player.getInternalPlayer().element.title);
  };

  const getVideo = () => {
    if (video !== undefined) return video;
    axios.get(`/courses?id=${id}`).then((res) => setVideo(res.data));
  };

  useEffect(() => {
    getVideo();
  }, [video]);

  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      {video !== undefined ? (
        <>
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={`${video.link}?access_token=${REACT_APP_ACCESS_TOKEN}`}
              controls
              width="70%"
              height="100%"
              onReady={handleReady}
            />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
