import { forwardRef, JSX, RefObject, useEffect, useRef, useState } from "react";
// import audio1 from "../../public/audio1.mp3";
import { Button } from "./ui";
import { useAudio } from "@/hooks";
import { PauseIcon, PlayCircle, PlayIcon, SpeakerIcon } from "lucide-react";

interface Props {
  type: "OPEN" | "TOGGLE";
  onOpen: () => void;
}

const AudioButton = forwardRef<HTMLAudioElement, Props>(
  ({ type, onOpen }: Props, ref) => {
    console.log("REF: ", ref);
    const { isPlaying, togglePlayAudio } = useAudio();

    const [DisplayIcon, setDisplayIcon] = useState(PauseIcon);

    useEffect(() => {
      if (isPlaying) {
        setDisplayIcon(PlayIcon);
      } else {
        setDisplayIcon(PauseIcon);
      }
    }, [isPlaying]);

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
          // <Button
          //   onClick={() => {
          //     togglePlayAudio(
          //       (ref as RefObject<HTMLAudioElement>).current as HTMLAudioElement
          //     );

          //     return onOpen();
          //   }}
          //   style={{
          //     background: "none",
          //     borderRadius: "50%",
          //     border: "1px solid white",
          //     width: "50px",
          //     height: "50px",
          //   }}
          // >
          //   {`${isPlaying ? "Pause" : "Play"}`}
          //   </Button>
          <DisplayIcon
            size={40}
            style={{
              background: "none",
              borderRadius: "50%",
              border: "1px solid white",
              color: "white",
              padding: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              togglePlayAudio(
                (ref as RefObject<HTMLAudioElement>).current as HTMLAudioElement
              );

              return onOpen();
            }}
          />
        )}
      </>
    );
  }
);

export default AudioButton;
