import { Dimensions, Image, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled(View)`
  background-color: #ffcb05;
  height: 80px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const FtView = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const FtTitle = styled(Image)`
  height: ${Dimensions.get("window").height / 2}px;
  width: ${Dimensions.get("window").width}px;
`;

export const ViewTxt = styled(View)`
  position: absolute;
  width: 328px;
  height: 40px;
  left: 23px;
  top: 414px;
  justify-content: center;
  align-items: center;
`;

export const Txt = styled(Text)`
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  padding-bottom: 10px;
`;

export const Txtmin = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #7d7e80;
`;

export const ViewBtn = styled(View)`
  position: absolute;
  width: 233px;
  height: 45px;
  left: 77px;
  top: 532px;
  align-items: center;
`;

export const BtnSearch = styled(TouchableOpacity)`
  border: 1px solid #7d7e80;
  width: 233px;
  height: 45px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const TxtBtn = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #7d7e80;
`;

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
`;
