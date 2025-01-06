"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { RefObject, forwardRef, useEffect, useState } from "react";
import { useAudio } from "@/hooks";

interface Props {
  type: "OPEN" | "TOGGLE";
  onOpen: () => void;
}

const AudioButton = forwardRef<HTMLAudioElement, Props>(function AudioButton(
  { type, onOpen }: Props,
  ref
) {
  const { isPlaying, togglePlayAudio } = useAudio();

  const [icon, setIcon] = useState("pause");

  useEffect(() => {
    if (isPlaying) {
      setIcon("play");
    } else {
      setIcon("pause");
    }
  }, [isPlaying]);

  const DisplayIcon = () => {
    return icon === "play" ? (
      <PlayIcon
        size={40}
        style={{
          background: "none",
          borderRadius: "50%",
          border: "1px solid white",
          color: "white",
          padding: "5px",
          cursor: "pointer",
          position: "fixed",
          zIndex: "999",
          top: "5px",
          left: "5px",
        }}
        onClick={() => {
          togglePlayAudio(
            (ref as RefObject<HTMLAudioElement>).current as HTMLAudioElement
          );

          return onOpen();
        }}
      />
    ) : (
      <PauseIcon
        size={40}
        style={{
          background: "none",
          borderRadius: "50%",
          border: "1px solid white",
          color: "white",
          padding: "5px",
          cursor: "pointer",
          position: "fixed",
          zIndex: "999",
          top: "5px",
          left: "5px",
        }}
        onClick={() => {
          togglePlayAudio(
            (ref as RefObject<HTMLAudioElement>).current as HTMLAudioElement
          );

          return onOpen();
        }}
      />
    );
  };
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
        <DisplayIcon />
        // </div>
      )}
    </>
  );
});

export default AudioButton;
