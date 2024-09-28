import React, { useContext } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

const Navigation: React.FC = () => {
  const { currentDialogue, setCurrentDialogue } = useContext(GlobalContext)!;

  const handleNext = () => {
    if (currentDialogue < 2) {
      // Assuming 3 dialogues
      setCurrentDialogue((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentDialogue > 0) {
      setCurrentDialogue((prev) => prev - 1);
    }
  };

  return (
    <div className="mt-4 flex justify-between">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        onClick={handlePrevious}
        disabled={currentDialogue === 0}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        onClick={handleNext}
        disabled={currentDialogue === 2}
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
