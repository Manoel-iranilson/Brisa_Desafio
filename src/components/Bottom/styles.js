import { View, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const BtnSair = styled(TouchableOpacity)`
  justify-content: space-between;
`;

export const ViewSair = styled(View)`
  border: 1px solid #343232;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  width: 100px;
  margin-right: 24px;
`;

export const BtnEscuro = styled(TouchableOpacity)`
  justify-content: space-between;
`;

export const ViewEscuro = styled(View)`
  border: 1px solid #4d4d4e;
  background-color: #4d4d4e;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  width: 130px;
  margin-left: 24px;
`;
