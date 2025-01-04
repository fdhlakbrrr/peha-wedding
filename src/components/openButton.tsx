import { useRef } from "react";
import audio1 from "../../public/audio1.mp3";
import { Button } from "./ui";
import { useAudio } from "@/hooks";

interface Props {
  onOpen: () => void;
}

const OpenButton = ({ onOpen }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { togglePlayAudio } = useAudio();

  return (
    <>
      <button
        onClick={() => {
          togglePlayAudio(audioRef.current as HTMLAudioElement);

          return onOpen();
        }}

        className="border border-white rounded-full text-white p-2"
      >
        Buka Undangan
      </button>
      <audio ref={audioRef} autoPlay loop>
        <source src={audio1} type="audio/mp3" />
      </audio>
    </>
  );
};

export default OpenButton;
