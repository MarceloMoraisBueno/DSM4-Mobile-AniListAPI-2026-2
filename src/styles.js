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

// Estilo da página MAIN (Cards)
export const CardsContainer = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const SearchRow = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  flex: 1;
  height: 48px;
  background: #eee;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 15px;
  margin-right: 10px;
`;

export const AddButton = styled(RectButton)`
  background: #8400ff;
  padding: 14px;
  border-radius: 4px;
  align-items: center;
  margin-bottom: 15px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Card = styled.View`
  flex-direction: row;
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const CardImage = styled.Image`
  width: 70px;
  height: 100px;
  border-radius: 4px;
  background: #eee;
`;

export const CardInfo = styled.View`
  flex: 1;
  margin-left: 12px;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const CardStatus = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 4px;
`;

export const CardActions = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const ActionButtonText = styled.Text`
  color: #8400ff;
  font-size: 13px;
  font-weight: bold;
`;

export const DeleteButtonText = styled.Text`
  color: #d00;
  font-size: 13px;
  font-weight: bold;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: #999;
  margin-top: 40px;
`;