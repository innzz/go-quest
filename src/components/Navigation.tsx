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
    <div className="mt-6 flex justify-between">
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition duration-200 
      hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500`}
        onClick={handlePrevious}
        disabled={currentDialogue === 0}
      >
        Previous
      </button>
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg shadow transition duration-200 
      hover:bg-blue-600 disabled:bg-gray-300 disabled:text-gray-500`}
        onClick={handleNext}
        disabled={currentDialogue === 2} // Updated to use dialogues length
      >
        Next
      </button>
    </div>
  );
};

export default Navigation;
