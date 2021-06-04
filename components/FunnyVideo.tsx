import * as React from "react";
import styled from "@emotion/styled";
import { FiVolumeX, FiVolume2 } from "react-icons/fi";

const videos = [
  { src: "blum.mp4", sound: true },
  { src: "dancingBirds.mp4", sound: false },
];

const Video = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: block;
  position: relative;
  width: fit-content;
  padding: 20px;

  & > video {
    border-radius: 3px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    background-color: var(--color-gray-4);
    display: block;
    max-width: 75vw;
    transition: var(--transition-ease);
    width: 480px;
    min-height: 240px;

    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
  }
  & > button {
    align-items: center;
    background: none;
    border: none;
    border-radius: 50%;
    bottom: 36px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    right: 36px;
    height: 48px;
    position: absolute;
    transition: var(--transition-ease);
    width: 48px;

    &:hover,
    &:focus {
      background: rgba(240, 240, 240, 0.25);
    }
    &:active {
      background: rgba(240, 240, 240, 0.5);
    }
  }
`;

interface FunnyVideoProps {}

export const FunnyVideo: React.FC<FunnyVideoProps> = () => {
  const videoRef = React.useRef<HTMLVideoElement>();
  const [muted, setMuted] = React.useState(true);

  const toggleMute = () => {
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const video = React.useMemo(() => {
    const now = new Date();
    return videos[now.getDate() % videos.length];
  }, []);

  React.useEffect(() => {
    if (videoRef) {
      videoRef.current.volume = 0.4;
    }
  }, []);

  return (
    <Video>
      <video ref={videoRef} autoPlay muted loop>
        <source src={`/funnyVideos/${video.src}`} type="video/mp4" />
        404 | Page not found
      </video>
      {video.sound && (
        <button onClick={toggleMute}>
          {muted ? (
            <FiVolumeX size={28} color="#161616" />
          ) : (
            <FiVolume2 size={28} color="#161616" />
          )}
        </button>
      )}
    </Video>
  );
};
