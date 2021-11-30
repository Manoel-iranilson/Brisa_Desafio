import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Routes from "./src/routes/index.routes";
import { AuthProvider } from "./src/contexts/Auth";
import { Image } from "react-native-svg";
import Astronaut from "./src/assets/Astronaut";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
