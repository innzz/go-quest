import React, { useContext, useState } from "react";
import { GlobalContext } from "../providers/GlobalProvider";
import Navigation from "./Navigation";

interface Dialogue {
  originalText: string;
  translatedText: string;
}

// Mock dialogues data
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

// Mock translation function: You can replace this with an actual translation API or function.
const mockTranslate = (
  text: string,
  from: "original" | "translated"
): string => {
  if (from === "original") {
    return text.split("").reverse().join(""); // Example: reverse the text as "translated"
  } else {
    return text.split("").reverse().join(""); // Example: reverse the text back as "original"
  }
};

const DialogueDisplay: React.FC = () => {
  const { currentDialogue } = useContext(GlobalContext)!;
  const [dialogueData, setDialogueData] = useState<Dialogue[]>(dialogues);

  const handleOriginalTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedText = e.target.value;

    setDialogueData((prevData) => {
      const updatedDialogue = [...prevData];
      updatedDialogue[currentDialogue].originalText = updatedText;
      updatedDialogue[currentDialogue].translatedText = mockTranslate(
        updatedText,
        "original"
      );
      return updatedDialogue;
    });
  };

  const handleTranslatedTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const updatedText = e.target.value;

    setDialogueData((prevData) => {
      const updatedDialogue = [...prevData];
      updatedDialogue[currentDialogue].translatedText = updatedText;
      updatedDialogue[currentDialogue].originalText = mockTranslate(
        updatedText,
        "translated"
      );
      return updatedDialogue;
    });
  };

  return (
    <div className="w-full mx-auto mt-6 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold text-center mb-4">
        Dialogue {currentDialogue + 1}
      </h2>

      <div className="mb-4">
        <label className="block font-medium mb-1 text-gray-700">
          Original Text
        </label>
        <textarea
          className="w-full h-24 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          value={dialogueData[currentDialogue].originalText}
          onChange={handleOriginalTextChange}
          placeholder="Type original text here..."
        />
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700">
          Translated Text
        </label>
        <textarea
          className="w-full h-24 border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          value={dialogueData[currentDialogue].translatedText}
          onChange={handleTranslatedTextChange}
          placeholder="Translation will appear here..."
        />
      </div>

      <Navigation />
    </div>
  );
};

export default DialogueDisplay;
