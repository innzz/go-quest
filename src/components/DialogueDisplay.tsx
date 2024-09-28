import React, { useContext, useState } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

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
    <div className="mt-4">
      <h2 className="font-semibold">Dialogue {currentDialogue + 1}</h2>

      <div className="mt-2">
        <label className="block font-medium">Original Text</label>
        <textarea
          className="w-full border rounded p-2"
          value={dialogueData[currentDialogue].originalText}
          onChange={handleOriginalTextChange}
        />
      </div>

      <div className="mt-2">
        <label className="block font-medium">Translated Text</label>
        <textarea
          className="w-full border rounded p-2"
          value={dialogueData[currentDialogue].translatedText}
          onChange={handleTranslatedTextChange}
        />
      </div>
    </div>
  );
};

export default DialogueDisplay;
