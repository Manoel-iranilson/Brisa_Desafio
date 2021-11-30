import React from "react";
import { Image, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchScreen from "../screens/SearchScreen/Index";
import HomeScreen from "../screens/FavoritesScreen/Index";
import AllScreen from "../screens/AllScreen/Index";

import { ColStyle, RowStyle } from "../components/layout";
import Bottom from "../components/Bottom/bottom";

const Tab = createMaterialTopTabNavigator();

function TabsRoutes() {
  return (
    <>
      <View
        style={{
          backgroundColor: "#FFCB05",
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RowStyle justifyContent="center">
          <ColStyle alignItems="center" width="100%">
            <Image source={require("../assets/image.png")} />
          </ColStyle>
        </RowStyle>
      </View>

      <Tab.Navigator>
        <Tab.Screen name="Favoritos" component={HomeScreen} />
        <Tab.Screen name="Procurar" component={SearchScreen} />
        <Tab.Screen name="Ver Todos" component={AllScreen} />
      </Tab.Navigator>

      <Bottom />
    </>
  );
}
export default TabsRoutes;
