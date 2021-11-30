import styled from "styled-components";
import { View, Text, TouchableOpacity } from "react-native";

export const Nome = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  line-height: 25px;
`;

export const TypesView = styled(View)`
  align-items: center;
  height: 24px;
  justify-content: center;
  border-radius: 8px;
  ${(props) => `
  border: 1px solid ${props.borderColor ? props.borderColor : "#ffcb05"};
  backgroundColor: ${props.backgroundColor}
`}
`;

export const BtnDetails = styled(TouchableOpacity)`
  border: 1px solid #ffcb05;
  background-color: #ffcb05;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;
