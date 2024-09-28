import React, { useState, useRef, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const waveformContainerRef = useRef<HTMLDivElement | null>(null);

  // Initialize WaveSurfer when the component mounts
  useEffect(() => {
    if (waveformContainerRef.current) {
      waveSurferRef.current = WaveSurfer.create({
        container: waveformContainerRef.current,
        waveColor: "violet",
        progressColor: "purple",
        cursorColor: "navy",
        height: 100,
        barWidth: 2,
      });
    }

    return () => {
      // Clean up the waveform instance on unmount
      waveSurferRef.current?.destroy();
    };
  }, []);

  const startRecording = (): void => {
    audioContextRef.current = new AudioContext();
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        setAudioBlob(blob);

        // Load the recorded audio into WaveSurfer for visualization
        if (waveSurferRef.current) {
          const audioURL = URL.createObjectURL(blob);
          waveSurferRef.current.load(audioURL);
        }

        // Clear the audio chunks for the next recording
        audioChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    });
  };

  const stopRecording = (): void => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playRecording = (): void => {
    if (audioBlob) {
      const audioURL = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioURL);
      audio.play();
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <button onClick={playRecording} disabled={!audioBlob}>
        Play Recording
      </button>

      {/* Waveform visualization */}
      <div ref={waveformContainerRef} className="waveform mt-4"></div>
    </div>
  );
};

export default AudioRecorder;
