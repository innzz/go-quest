import "./App.css";
import { AuthComponent } from "./auth/AuthComponent";
import AudioRecorder from "./components/AudioRecorder";
import DialogueDisplay from "./components/DialogueDisplay";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import { GlobalProvider } from "./providers/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <AuthComponent>
        <div className="w-full mx-auto">
          <Navbar />
          <VideoPlayer />
          <DialogueDisplay />
          <AudioRecorder />
        </div>
      </AuthComponent>
    </GlobalProvider>
  );
}

export default App;
