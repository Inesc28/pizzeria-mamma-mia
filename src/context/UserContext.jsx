import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  const logout = () => {
    setToken(false);
  };

  const login = () => {
    setToken(true);
  };

  const contextValue = {
    token,
    logout,
    login,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
