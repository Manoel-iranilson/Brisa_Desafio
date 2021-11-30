import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { BtnEscuro, BtnSair, ViewEscuro, ViewSair } from "./styles";
import { ColStyle, RowStyle } from "../layout";
import { UseAuth } from "../../contexts/Auth";
const Bottom = () => {
  const { handleSingout } = UseAuth();
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <RowStyle justifyContent="space-between" style={{ marginBottom: 24 }}>
        <ColStyle>
          <BtnEscuro>
            <ViewEscuro>
              <Entypo name="moon" size={20} color="#D2D4D6" />
              <Text style={{ color: "#D2D4D6" }}>Tema Escuro</Text>
            </ViewEscuro>
          </BtnEscuro>
        </ColStyle>
        <ColStyle alignItems="flex-start" width="30%">
          <BtnSair onPress={() => handleSingout()}>
            <ViewSair>
              <Text>Sair</Text>
              <Text>
                <MaterialIcons name="logout" size={20} color="black" />
              </Text>
            </ViewSair>
          </BtnSair>
        </ColStyle>
      </RowStyle>
    </View>
  );
};

export default Bottom;
