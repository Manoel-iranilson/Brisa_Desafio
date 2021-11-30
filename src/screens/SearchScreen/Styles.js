import {
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const ViewInput = styled(View)`
  margin-top: 50px;
  justify-content: space-between;
  flex-direction: row;
  padding-right: 13px;
  align-items: center;
  border: 1px solid #dee0e3;
  border-radius: 8px;
  width: 327px;
  height: 54px;
`;

export const Input = styled(TextInput)`
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 15px;
  margin-top: 16px;
  margin-bottom: 17px;
  margin-left: 9px;
  margin-bottom: 15px;
`;
