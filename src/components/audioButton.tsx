import { useRef } from "react";
import audio1 from "../../public/audio1.mp3";
import { Button } from "./ui";
import { useAudio } from "@/hooks";

const AudioButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, togglePlayAudio } = useAudio();

  return (
    <>
      <Button
        onClick={() => togglePlayAudio(audioRef.current as HTMLAudioElement)}
      >{`${isPlaying ? "Pause" : "Play"}`}</Button>
      <audio ref={audioRef} autoPlay loop>
        <source src={audio1} type="audio/mp3" />
      </audio>
    </>
  );
};

export default AudioButton;
