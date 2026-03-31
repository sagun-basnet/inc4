import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || null,
  );

  const login = async (data) => {
    try {
      const res = await axios.post("http://localhost:5555/login", data);
      //   console.log(res, ":UseContext");
      setCurrentUser(res.data.user);
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
      localStorage.setItem("appToken", res.data.token);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    setCurrentUser(null);
    toast.success("User logged out");
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("userInfo", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
