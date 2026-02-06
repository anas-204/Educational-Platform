import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(() => {
  //   const stored = Cookies.get("user");
  //   return stored ? JSON.parse(stored) : null;
  // });

  const [token, setToken] = useState(() => Cookies.get("token") || null);

  const login = (response) => {
    // if (![1, 2].includes(response.data.user.role_id)) {
    //   throw new Error("You are not allowed to login in this platform");
    // }

    Cookies.set("token", response.data.token, { expires: 7 });
    // Cookies.set(
    //   "user",
    //   JSON.stringify({
    //     ...response.data.user,
    //   }),
    //   { expires: 7 },
    // );

    setToken(response.data.token);
    // setUser({
    //   ...response.data.user,
    // });
  };

  const logout = () => {
    Cookies.remove("token");
    // Cookies.remove("user");
    setToken(null);
    // setUser(null);
  };

  return (
    // <AuthContext.Provider value={{ user, token, login, logout }}>

    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
