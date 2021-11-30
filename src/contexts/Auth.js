import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import singIn from "../services/SignIn";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const navigation = useNavigation();
  const handleSingIn = async (data) => {
    try {
      const res = await singIn(data);
      navigation.navigate("Home");
      console.log(res);
      if (res.Token) {
        await AsyncStorage.setItem("@Pokemon:Token", res.Token);
      }
    } catch (error) {}
  };
  const handleSingout = async () => {
    navigation.navigate("Login");
    await AsyncStorage.removeItem("@Pokemon:Token");
    setToken("");
    console.log("token: ", token);
  };
  useEffect(() => {
    async function getToken() {
      const Token = await AsyncStorage.getItem("@Pokemon:Token");
      setToken(Token);
      console.log("token: ", token);
    }
    getToken();
  }, []);
  return (
    <AuthContext.Provider value={{ handleSingIn, token, handleSingout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function UseAuth() {
  const { handleSingIn, token, handleSingout } = useContext(AuthContext);
  return { handleSingIn, token, handleSingout };
}
