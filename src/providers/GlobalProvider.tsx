import React, { createContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  currentDialogue: number;
  setCurrentDialogue: React.Dispatch<React.SetStateAction<number>>;
  recordingStatus: boolean;
  setRecordingStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [currentDialogue, setCurrentDialogue] = useState<number>(0);
  const [recordingStatus, setRecordingStatus] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        currentDialogue,
        setCurrentDialogue,
        recordingStatus,
        setRecordingStatus,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
