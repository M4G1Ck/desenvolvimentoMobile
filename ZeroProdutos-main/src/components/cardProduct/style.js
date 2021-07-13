import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  width: 90%;
  height: 180px;
  justify-content: center;
  margin: 2px 20px 0px 20px;
  background-color: white;
`;

export const ContainerImg = styled.Image`
  flex: 1;
  height: 180px;
  width: 90%;
`;

export const ContainerCont = styled.View`
  flex: 1;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ContainerInf = styled.View`
  display: flex;
  flex: 1;
  padding: 0px 0px 0px 10px;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 20px;
`;

export const Price = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 14px;
`;