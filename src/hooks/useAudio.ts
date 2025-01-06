import { useState } from "react";

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayAudio = (audioPlayer: HTMLAudioElement) => {
    setIsPlaying(!isPlaying);
    return !audioPlayer.paused ? audioPlayer.pause() : audioPlayer.play();
  };

  return {
    togglePlayAudio,
    isPlaying,
    setIsPlaying,
  };
};
