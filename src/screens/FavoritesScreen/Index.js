import React from "react";
import { View } from "react-native";
import Astronaut from "../../assets/Astronaut";

import {
  Container,
  ViewTxt,
  Txt,
  Txtmin,
  BtnSearch,
  ViewBtn,
  TxtBtn,
} from "./Styles";
import { ColStyle, RowStyle } from "../../components/layout";

function Index() {
  return (
    <Container>
      <View style={{ flex: 8 }}>
        <View style={{ paddingTop: 50 }}>
          <Astronaut />
        </View>
        <ViewTxt>
          <RowStyle justifyContent="center">
            <ColStyle width="100%" alignItems="center">
              <Txt>Está meio vazio por aqui!</Txt>
            </ColStyle>
          </RowStyle>
          <RowStyle justifyContent="center">
            <ColStyle width="80%" alignItems="center">
              <Txtmin>
                Procure por pokémons para adicioná-los aos seus favoritos.
              </Txtmin>
            </ColStyle>
          </RowStyle>
        </ViewTxt>
        <ViewBtn>
          <BtnSearch onPress={() => navigation.navigate("Procurar")}>
            <TxtBtn>Procurar pokémons</TxtBtn>
          </BtnSearch>
        </ViewBtn>
      </View>
    </Container>
  );
}

export default Index;
