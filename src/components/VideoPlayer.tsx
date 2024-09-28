import React, { useRef } from "react";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sampleVideos: string[] = [
    "https://cdn.pixabay.com/video/2024/06/10/216058_large.mp4",
    "https://cdn.pixabay.com/video/2022/12/18/143419-782363231_tiny.mp4",
    "https://cdn.pixabay.com/video/2023/10/22/186115-877653483_tiny.mp4",
  ];

  const playVideo = (): void => {
    videoRef.current?.play();
  };

  const pauseVideo = (): void => {
    videoRef.current?.pause();
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src={sampleVideos[0]} type="video/mp4" />
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
};

export default VideoPlayer;
