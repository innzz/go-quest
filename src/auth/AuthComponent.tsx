import React, { ReactNode, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../providers/GlobalProvider";

interface AuthComponentProps {
  children: ReactNode;
}

export const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsAuthenticated, isAuthenticated, handleLogin, errorMessage } =
    useContext(GlobalContext)!;

  // Load authentication status from local storage
  useEffect(() => {
    const sessionData = localStorage.getItem("isAuthenticated");
    if (sessionData === "true") {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);

  return (
    <>
      {isAuthenticated ? (
        <>{children}</>
      ) : (
        <div className="max-w-md mx-auto mt-6 p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">
            Login to Dubbing Interface
          </h2>
          <label className="text-left w-full inline-block">Username</label>
          <input
            type="text"
            placeholder='Username is "user"'
            className="border p-2 mb-2 w-full rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="text-left w-full inline-block">Password</label>
          <input
            type="password"
            placeholder='Password is "pass"'
            className="border p-2 mb-4 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => {
              handleLogin({ username, password });
              setUsername("");
              setPassword("");
            }}
          >
            Login
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      )}
    </>
  );
};
