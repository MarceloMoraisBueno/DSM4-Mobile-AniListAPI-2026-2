import React from "react";
import { ScrollView } from "react-native";
import {
  CardsContainer,
  CardImage,
  CardTitle,
  CardStatus,
} from "../styles";

export default function Detalhes({ route }) {
  const { anime } = route.params;

  return (
    <ScrollView>
      <CardsContainer>
        <CardImage
          source={{ uri: anime.coverImage.large }}
          style={{ width: 150, height: 220, alignSelf: "center", marginBottom: 15 }}
        />

        <CardTitle style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>
          {anime.title.english || anime.title.romaji}
        </CardTitle>

        <CardStatus>Status: {anime.status}</CardStatus>
        <CardStatus>Episódios: {anime.episodes ?? "N/A"}</CardStatus>
        <CardStatus>Gêneros: {anime.genres.join(", ")}</CardStatus>

        <CardStatus style={{ marginTop: 15, lineHeight: 20 }}>
          {anime.description
            ? anime.description.replace(/<[^>]+>/g, "")
            : "Sem descrição disponível."}
        </CardStatus>
      </CardsContainer>
    </ScrollView>
  );
}