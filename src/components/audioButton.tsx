import { forwardRef, RefObject, useRef } from "react";
// import audio1 from "../../public/audio1.mp3";
import { Button } from "./ui";
import { useAudio } from "@/hooks";

interface Props {
  type: "OPEN" | "TOGGLE";
  onOpen: () => void;
}

const AudioButton = forwardRef<HTMLAudioElement, Props>(
  ({ type, onOpen }: Props, ref) => {
    console.log("REF: ", ref);
    const { isPlaying, togglePlayAudio } = useAudio();

    return (
      <>
        {type === "OPEN" ? (
          <button
            onClick={() => {
              togglePlayAudio(
                (ref as RefObject<HTMLAudioElement>).current as HTMLAudioElement
              );

              return onOpen();
            }}
            className="border border-white rounded-full text-white p-2"
          >
            Buka Undangan
          </button>
        ) : (
          <Button
            onClick={() => {
              togglePlayAudio(
                (ref as RefObject<HTMLAudioElement>).current as HTMLAudioElement
              );

              return onOpen();
            }}
          >{`${isPlaying ? "Pause" : "Play"}`}</Button>
        )}
      </>
    );
  }
);

export default AudioButton;
