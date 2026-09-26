import React, { useState } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Input, SubmitButton, SubmitButtonText, LinkText } from "../styles";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  async function entrar() {
    if (!usuario || !senha) {
      Alert.alert("Atenção", "Preencha usuário e senha.");
      return;
    }

    try {
      const dados = await AsyncStorage.getItem("usuario");

      if (!dados) {
        Alert.alert("Atenção", "Nenhum usuário cadastrado ainda.");
        return;
      }

      const usuarioSalvo = JSON.parse(dados);

      if (usuarioSalvo.usuario === usuario && usuarioSalvo.senha === senha) {
        navigation.replace("main");
      } else {
        Alert.alert("Erro", "Usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  }

  return (
    <Container>
      <Input placeholder="Usuário" value={usuario} onChangeText={setUsuario} autoCapitalize="none" />
      <Input placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />

      <SubmitButton onPress={entrar}>
        <SubmitButtonText>Entrar</SubmitButtonText>
      </SubmitButton>

      <LinkText onPress={() => navigation.navigate("cadastro")}>
        CADASTRAR USUÁRIO
      </LinkText>
    </Container>
  );
}