import styled from "styled-components";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const LogoView = styled(View)`
  background-color: black;
  margin-top: 50px;
`;

export const LogoImage = styled(Image)`
  width: 280px;
  height: 100px;
`;

export const ViewCenter = styled(View)`
  margin-top: 100px;
  margin-right: 30px;
`;
export const TxtCenter = styled(Text)`
  font-size: 40px;
  font-weight: bold;
`;

export const ViewInput = styled(View)`
  margin-top: 70px;
`;

export const InputTxt = styled(TextInput)`
  background-color: white;
  width: 360px;
  height: 60px;
  border-color: #a9a9a9;
  border-width: 2px;
  color: black;
  font-size: 15px;
  border-radius: 8px;
  padding-left: 30px;
  margin-bottom: 15px;
`;

export const BtnEnter = styled(TouchableOpacity)`
  background-color: #ffd750;
  width: 360px;
  height: 60px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
export const TxtEnter = styled(Text)`
  font-size: 20px;
`;

export const ImageBot = styled(Image)`
  width: 400px;
  height: 140px;
`;
