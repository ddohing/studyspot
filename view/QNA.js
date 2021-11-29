import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.Text`
  font-size: 20;
  padding: 5px;
`;

const QNA = () => {
  return (
    <CenteredView>
      <IntroText>제작자 @_ddohing</IntroText>
      <IntroText>이메일 dnflwlq004@naver.com</IntroText>
    </CenteredView>
  );
};
export default QNA;
