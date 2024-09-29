
## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Tailwind CSS
- Typescript
- Vite
- Wavesurfer.js

## <a name="quick-start">Steps to run application</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/innzz/go-quest.git
cd go-quest
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="quick-start">Explanation on use of Ai assisted coding</a>

**ChatGPT for Code Generation:**
- <b>ChatGPT</b> was used to generate key pieces of code for the <b>audio recording</b> and <b>video recording</b> modules. For example, it helped in setting up the MediaRecorder API and Web Audio API, providing instant code suggestions and guidance. This allowed for quick prototyping of complex functionalities, such as capturing media streams, handling audio and video input, and managing recordings efficiently.

**Simplifying Media APIs:**
- By leveraging <b>ChatGPT's</b> knowledge of browser-based media APIs, you were able to quickly integrate complex features like media permissions, audio/video synchronization, and recording lifecycle events (start, stop, save). This saved time by reducing the need to manually sift through documentation.

**Problem-Solving and Debugging:**
- <b>ChatGPT</b> assisted in troubleshooting and improving the code by identifying potential issues, like how to handle media permissions across browsers, optimize audio/video sync, or gracefully manage edge cases (e.g., a user denying microphone or camera access).

**Boosting Productivity:**
- With <b>ChatGPT</b>, routine tasks such as setting up recording states, event listeners, and rendering controls were automated, allowing you to focus on refining user experience and building custom features. This significantly reduced development time and made it easier to iterate on the project.

## <a name="quick-start">Challenges</a>

**Bug in AI-Generated Code:**
- One of the major challenges was with the AI-generated code, where the recording would start but wouldn’t stop as expected. This issue was not immediately solvable using AI alone. To overcome this, I asked ChatGPT to explain its logic, and by understanding the underlying code better, I was able to debug and fix the issue myself.

**Minor Bugs:**
- There were also minor bugs in the AI-generated code, such as errors in handling certain media states or event listeners. Again, by reviewing the code with AI's explanations, I was able to identify the root causes and implement the necessary fixes manually.

**Improving UI/UX:**
- Another challenge was that while AI provided functional code, it didn’t deliver a great UI/UX for the audio and video recording features. I took the initiative to improve the design and user interactions myself, refining the interface for a more user-friendly and visually appealing experience.

## <a name="quick-start">Improvements or Additions with More Time:</a>

**Integration of Video and Audio Recorders:**
- If I had more time, I would have merged the <b>video recorder</b>, <b>audio recorder</b>, and <b>dialogue features</b> into a single cohesive application. This would allow users to easily add voiceovers to videos, effectively explaining content in any language. The integration would streamline the process, making it intuitive for users to record their explanations directly alongside the video content.

**Multilingual Subtitling:**
- Additionally, I would implement functionality that uses the dialogue feature to convert recorded audio into the user’s preferred language as subtitles. This would enhance accessibility and broaden the reach of the content, making it useful for users who want to create multilingual videos without needing extensive editing skills.

**Enhanced User Experience:**
- I would also focus on improving the overall user experience by creating a more intuitive interface for managing recordings, editing audio tracks, and syncing subtitles. This would make the app not only powerful but also user-friendly, catering to a wider audience of content creators.
