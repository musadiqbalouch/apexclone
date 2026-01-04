import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValue = {
  isAuthenticated: false,
  user: null,
};
const AuthContext = createContext(initialValue);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authState, setAuthState] = useState(initialValue);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedIn") || "false");
    if (user) {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        user: user,
      }));
    }
  }, []);

  const handleLogin = (values) => {
    localStorage.setItem("loggedIn", JSON.stringify(values));
    setAuthState((prev) => ({ ...prev, isAuthenticated: true, user: values }));

    try {
      setAuthState((prev) => ({
        ...prev,
        isAuthenticated: true,
        user: values,
      }));
      setAuthState((prev) => ({ ...prev, isAuthenticated: true }));

      // navigate("/employe");
    } catch (error) {
      setAuthState((prev) => ({ ...prev, isAuthenticated: false }));
    }
  };
  const value = {
    ...authState,
    handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => useContext(AuthContext);
