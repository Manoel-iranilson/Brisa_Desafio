import { View } from "react-native";
import styled from "styled-components";

export const RowStyle = styled(View)`
  flex-direction: row;
  ${(props) => `justifyContent: ${props?.justifyContent};
  `}

  align-items: center;
  width: 100%;
`;

export const ColStyle = styled(View)`
  flex-direction: column;
  justify-content: center;
  ${(props) => `width:${props?.width};
  align-items: ${props?.alignItems};
  `};
`;
