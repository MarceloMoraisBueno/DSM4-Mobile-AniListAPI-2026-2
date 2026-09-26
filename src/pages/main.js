import React, { useState } from "react";
import { Alert } from "react-native";
import { buscarAnimePorNome } from "../services/api";
import {
  CardsContainer,
  SearchRow,
  SearchInput,
  AddButton,
  AddButtonText,
  List,
  Card,
  CardImage,
  CardInfo,
  CardTitle,
  CardStatus,
  CardActions,
  ActionButton,
  ActionButtonText,
  DeleteButtonText,
  EmptyText,
} from "../styles";

export default function Main({ navigation }) {
  const [busca, setBusca] = useState("");
  const [cards, setCards] = useState([]);
  const [carregando, setCarregando] = useState(false);

  async function adicionarCard() {
    if (!busca.trim()) {
      Alert.alert("Atenção", "Digite o nome de um anime para buscar.");
      return;
    }

    setCarregando(true);
    try {
      const anime = await buscarAnimePorNome(busca.trim());

      if (!anime) {
        Alert.alert("Não encontrado", "Nenhum anime encontrado com esse nome.");
        return;
      }

      const jaExiste = cards.some((c) => c.id === anime.id);
      if (jaExiste) {
        Alert.alert("Atenção", "Esse anime já está na sua lista.");
        return;
      }

      setCards((prev) => [...prev, anime]);
      setBusca("");
    } catch (error) {
      console.error("Erro ao buscar anime:", error);
      Alert.alert("Erro", "Não foi possível buscar dados da API.");
    } finally {
      setCarregando(false);
    }
  }

  function excluirCard(id) {
    setCards((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <CardsContainer>
      <SearchRow>
        <SearchInput
          placeholder="Buscar anime..."
          value={busca}
          onChangeText={setBusca}
          onSubmitEditing={adicionarCard}
        />
        <AddButton onPress={adicionarCard} enabled={!carregando}>
          <AddButtonText>{carregando ? "..." : "ADD"}</AddButtonText>
        </AddButton>
      </SearchRow>

      <List
        data={cards}
        keyExtractor={(item) => String(item.id)}
        ListEmptyComponent={<EmptyText>Nenhum card adicionado ainda.</EmptyText>}
        renderItem={({ item }) => (
          <Card>
            <CardImage source={{ uri: item.coverImage.large }} />
            <CardInfo>
              <CardTitle numberOfLines={2}>
                {item.title.english || item.title.romaji}
              </CardTitle>
              <CardStatus>{item.status}</CardStatus>
              <CardActions>
                <ActionButton onPress={() => navigation.navigate("detalhes", { anime: item })}>
                  <ActionButtonText>Ver mais</ActionButtonText>
                </ActionButton>
                <ActionButton onPress={() => excluirCard(item.id)}>
                  <DeleteButtonText>Excluir</DeleteButtonText>
                </ActionButton>
              </CardActions>
            </CardInfo>
          </Card>
        )}
      />
    </CardsContainer>
  );
}