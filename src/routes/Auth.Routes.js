import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexLogin from "../screens/LoginScreen/Index";
import RoutesTabs from "./TopTabs.routes";

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={IndexLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={RoutesTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
