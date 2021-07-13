import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 40px;
`;

export const ContainerLog = styled.View`
display: flex;
justify-content: center;
width: 250px;
height:280px;
background-color: rgba(255,255,255,0.4);
border-radius:10;
`;

export const TextHeader = styled.Text`
font-size: 20px;
margin: 10px;
`;

export const TextLog = styled.TextInput`
font-size: 20px;
margin: 10px;
border-bottom-width: 1px;
`;

export const ContainerView = styled.View`
  display: flex;
  margin-top: 20px;
  width: 100px;
  border-radius: 10px;
  padding: 5px;
  justify-content: center;
  align-self: center;
  background-color: #00ce8e;

`;

export const Button = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
`;
