import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let lsUser = {};
  if (process.browser) {
    const localStorage = window && window.localStorage;
    lsUser = JSON.parse(localStorage && localStorage.getItem("user"));
  }
  const [user, setUser] = useState(lsUser || {});

  let sharedState = {
    isLogged: false,
    user,
    setUser: (user) => {
      localStorage && localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    },
  };
  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
