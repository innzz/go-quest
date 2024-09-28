// "https://cdn.pixabay.com/video/2024/06/10/216058_large.mp4"

import React, { useRef, useState } from "react";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime =
        (videoRef.current.duration * parseFloat(e.target.value)) / 100;
      videoRef.current.currentTime = seekTime;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const percent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleSliderMouseDown = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause video while seeking
    }
  };

  const handleSliderMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime =
        (videoRef.current.duration * parseFloat(e.currentTarget.value)) / 100;
      videoRef.current.currentTime = seekTime; // Seek to new time
      videoRef.current.play(); // Resume playing
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full mx-auto mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Video Player</h2>
      <div className="max-w-lg mx-auto mt-4">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-md"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          src="https://cdn.pixabay.com/video/2024/06/10/216058_large.mp4" // Sample video URL
          controls={false} // Disable default controls
        />
        <div className="flex items-center justify-between mt-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={handlePlayPause}
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            onMouseDown={handleSliderMouseDown}
            onMouseUp={handleSliderMouseUp}
            className="w-full mx-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
