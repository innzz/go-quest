import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

interface Dialogue {
  originalText: string;
  translatedText: string;
}

const dialogues: Dialogue[] = [
  { originalText: "Hello, how are you?", translatedText: "Hola, ¿cómo estás?" },
  {
    originalText: "I am fine, thank you.",
    translatedText: "Estoy bien, gracias.",
  },
  {
    originalText: "What are you doing?",
    translatedText: "¿Qué estás haciendo?",
  },
];

const DialogueDisplay: React.FC = () => {
  const { currentDialogue } = useContext(GlobalContext)!;

  return (
    <div className="mt-4">
      <h2 className="font-semibold">Dialogue {currentDialogue + 1}</h2>
      <div>
        <label className="block font-medium">Original Text</label>
        <textarea
          className="w-full border rounded p-2"
          value={dialogues[currentDialogue].originalText}
          readOnly
        />
      </div>
      <div className="mt-2">
        <label className="block font-medium">Translated Text</label>
        <textarea
          className="w-full border rounded p-2"
          value={dialogues[currentDialogue].translatedText}
          readOnly
        />
      </div>
    </div>
  );
};

export default DialogueDisplay;
