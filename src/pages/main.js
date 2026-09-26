import React from "react";
import { Text } from "react-native";
import { Container } from "../styles";

export default function Main() {
  return (
    <Container>
      <Text style={{ fontSize: 18, textAlign: "center" }}>
        Bem-vindo! Aqui vai a tela de Cards.
      </Text>
    </Container>
  );
}