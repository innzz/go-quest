import "./App.css";
import AudioRecorder from "./components/AudioRecorder";
import DialogueDisplay from "./components/DialogueDisplay";
import Navigation from "./components/Navigation";
import VideoPlayer from "./components/VideoPlayer";
import { GlobalProvider } from "./providers/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold mb-4">
          Dubbing Interface
        </h1>
        <VideoPlayer />
        <DialogueDisplay />
        <Navigation />
        <AudioRecorder />
      </div>
    </GlobalProvider>
  );
}

export default App;
