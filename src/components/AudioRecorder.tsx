import React, { useRef, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioRecorder: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks: Blob[] = [];
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null); // Reference to the media stream
  const waveSurferRef = useRef<WaveSurfer | null>(null); // Reference to WaveSurfer instance

  // Create a Wavesurfer instance when audioURL is set
  useEffect(() => {
    if (audioURL) {
      // Initialize Wavesurfer
      waveSurferRef.current = WaveSurfer.create({
        container: '#waveform', // The container where waveform will be rendered
        waveColor: '#00B4D8',
        progressColor: '#0077B6',
        height: 100
      });

      // Load the audio URL into Wavesurfer
      waveSurferRef.current.load(audioURL);

      // Cleanup when the component unmounts
      return () => {
        waveSurferRef.current?.destroy();
      };
    }
  }, [audioURL]);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaStreamRef.current = stream; // Store the media stream reference
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunks.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
      const url = URL.createObjectURL(audioBlob);
      setAudioURL(url);
      audioChunks.length = 0; // Clear the chunks for the next recording
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
    setRecordingDuration(0);

    timerRef.current = setInterval(() => {
      setRecordingDuration((prev) => prev + 1);
    }, 1000);
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (mediaStreamRef.current) {
        // Stop all tracks of the media stream
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    }
  };

  const handlePlayAudio = () => {
    if (waveSurferRef.current) {
      waveSurferRef.current.playPause(); // Play or pause the audio using WaveSurfer
    }
  };

  const handleResetRecording = () => {
    setAudioURL(null); // Clear the audio URL
    setRecordingDuration(0); // Reset the recording duration
    if (mediaStreamRef.current) {
      // Stop all tracks of the media stream
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (waveSurferRef.current) {
      waveSurferRef.current.destroy(); // Destroy WaveSurfer instance
      waveSurferRef.current = null; // Reset the Wavesurfer reference
    }
  };

  return (
    <div className="w-full mx-auto mt-6 p-4 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Audio Recorder</h2>
      <div id="waveform" className="mb-4"></div> {/* Waveform container */}
      <div className="flex flex-col items-center">
        <button
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          className={`py-3 px-6 rounded-lg text-white transition duration-300 ${
            isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {isRecording && (
          <div className="mt-4">
            <p className="text-sm text-red-500">Recording: {recordingDuration}s</p>
          </div>
        )}
        {audioURL && (
          <div className="mt-4">
            <button
              onClick={handlePlayAudio}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Play/Pause Recording
            </button>
            <button
              onClick={handleResetRecording}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300 ml-4"
            >
              Reset Recording
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioRecorder;
