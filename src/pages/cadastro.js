import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Input, SubmitButton, SubmitButtonText } from "../styles";

export default function Cadastro({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function salvarUsuario() {
    if (!usuario || !senha) {
      Alert.alert("Atenção", "Preencha usuário e senha.");
      return;
    }

    try {
      await AsyncStorage.setItem("usuario", JSON.stringify({ usuario, senha }));
      Alert.alert("Sucesso", "Usuário cadastrado!");
      navigation.navigate("login");
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  }

  return (
    <Container>
      <Input placeholder="Usuário" value={usuario} onChangeText={setUsuario} autoCapitalize="none" />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

      <SubmitButton onPress={salvarUsuario}>
        <SubmitButtonText>Salvar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}