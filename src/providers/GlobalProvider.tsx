import React, { createContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  currentDialogue: number;
  setCurrentDialogue: React.Dispatch<React.SetStateAction<number>>;
  recordingStatus: boolean;
  setRecordingStatus: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  handleLogout: () => void;
}

export const GlobalContext = createContext<GlobalContextProps | undefined>(
  undefined
);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [currentDialogue, setCurrentDialogue] = useState<number>(0);
  const [recordingStatus, setRecordingStatus] = useState<boolean>(false);

  const handleLogin = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    // Hardcoded credentials for demonstration
    const validUsername = "user";
    const validPassword = "pass";

    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true"); // Save authentication status to local storage
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Clear authentication status from local storage
  };

  return (
    <GlobalContext.Provider
      value={{
        currentDialogue,
        setCurrentDialogue,
        recordingStatus,
        setRecordingStatus,
        errorMessage,
        handleLogin,
        isAuthenticated,
        setErrorMessage,
        setIsAuthenticated,
        handleLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
