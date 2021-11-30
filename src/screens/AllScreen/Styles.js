import { Dimensions, Image, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`;

export const Btn = styled(TouchableOpacity)`
  ${(props) =>
    `border: 1px solid ${props.borderColor ? props.borderColor : "#6B6868"};
    backgroundColor: ${props.colorButton ? props.colorButton : "white"}
    `}
  height: 42px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ViewBtn = styled(View)`
  flex-direction: row;
  margin-top: 23px;
  margin-left: 24px;
  margin-right: 47px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
