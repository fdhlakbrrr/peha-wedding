import { RefObject, useRef } from "react";
// import audio1 from "../../public/audio1.mp3";
import { Button } from "./ui";
import { useAudio } from "@/hooks";

interface Props {
  type: "OPEN" | "TOGGLE";
  onOpen: () => void;
  ref: RefObject<HTMLAudioElement>;
}

const AudioButton = ({ type, onOpen, ref }: Props) => {
  console.log("REF: ", ref)
  // const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, togglePlayAudio } = useAudio();

  return (
    <>
      {type === "OPEN" ? (
        <button
          onClick={() => {
            togglePlayAudio(ref?.current as HTMLAudioElement);

            return onOpen();
          }}
          className="border border-white rounded-full text-white p-2"
        >
          Buka Undangan
        </button>
      ) : (
        <Button
          onClick={() => {
            togglePlayAudio(ref?.current as HTMLAudioElement);

            return onOpen();
          }}
        >{`${isPlaying ? "Pause" : "Play"}`}</Button>
      )}

      {/* <audio ref={ref} autoPlay loop>
        <source src={audio1} type="audio/mp3" />
      </audio> */}
    </>
  );
};

export default AudioButton;
