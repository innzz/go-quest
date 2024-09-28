import "./App.css";
import AudioRecorder from "./components/AudioRecorder";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">Dubbing Interface</h1>
      <VideoPlayer />
      <AudioRecorder />
    </div>
  );
}

export default App;
