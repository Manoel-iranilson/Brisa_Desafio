import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { ColStyle, RowStyle } from "../layout";
import { TypesView, BtnDetails, Nome } from "./Styles";

const CardPokemon = ({ name }) => {
  return (
    <CardContainer style={{ backgroundColor: "white" }}>
      <RowStyle justifyContent="center">
        <ColStyle width="50%" alignItems="center">
          <Text>y</Text>
        </ColStyle>
        <ColStyle width="50%" alignItems="center">
          <Text>x</Text>
        </ColStyle>
      </RowStyle>
      <RowStyle>
        <Nome>{name}</Nome>
      </RowStyle>
      <RowStyle>
        <Text style={{ fontSize: 12, color: "#8E8787" }}>ID: ***</Text>
      </RowStyle>
      <RowStyle>
        <ColStyle width="40%">
          <TypesView backgroundColor="#ffcb05" borderColor="#ffcb05">
            <Text>Elétrico</Text>
          </TypesView>
        </ColStyle>
        <View style={{ paddingLeft: 10 }} />
        <ColStyle width="40%">
          <TypesView backgroundColor="#FF3326" borderColor="#FF3326">
            <Text style={{ color: "white" }}>Fogo</Text>
          </TypesView>
        </ColStyle>
      </RowStyle>
      <View paddingTop={10} />
      <RowStyle justifyContent="center">
        <ColStyle width="100%">
          <BtnDetails>
            <Text>Ver detalhes</Text>
          </BtnDetails>
        </ColStyle>
      </RowStyle>
    </CardContainer>
  );
};
const CardContainer = styled(View)``;
export default CardPokemon;
