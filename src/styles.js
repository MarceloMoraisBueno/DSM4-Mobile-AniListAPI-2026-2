import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

// Estilo compartilhado de Login e Cadastro
export const Container = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
  background: #fff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  height: 48px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 15px;
  margin-bottom: 15px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #8400ff;
  border-radius: 4px;
  padding: 14px;
  margin-bottom: 15px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const LinkText = styled.Text`
  text-align: center;
  color: #8400ff;
  font-weight: bold;
`;

// Estilo da página MAIN (provisória por enquanto)
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;