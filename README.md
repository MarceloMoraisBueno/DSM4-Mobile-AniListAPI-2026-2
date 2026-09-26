# DSM4 Mobile - AniList API 2026-2

Aplicação mobile desenvolvida em React Native como projeto do 1º Bimestre da disciplina de Programacao para Dispositivos Moveis I - Fatec Franca "Dr. Thomaz Novelino".

**Aluno:** Marcelo Morais Bueno

## Sobre o projeto

O app permite que o usuário se cadastre, faça login e monte uma lista pessoal de cards de animes, consumindo dados em tempo real da [AniList API](https://anilist.co/graphiql).

## Funcionalidades

- **Login** — autenticação com usuário e senha salvos localmente
- **Cadastro de Usuário** — persistência local via `AsyncStorage`
- **Cards** — busca de animes por nome na AniList API, com adição e exclusão de cards
- **Detalhes** — tela com informações completas do anime (status, episódios, gêneros, sinopse)
- **Logout** — com popup de confirmação antes de encerrar a sessão

## Tecnologias

- React Native + Expo
- React Navigation (Stack Navigator)
- Styled Components
- AsyncStorage
- AniList API (GraphQL)

## Como executar

1. Clone o repositório:
```bash
git clone <link-do-repositorio>
cd dsm4-mobile-anilistapi-2026-2
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```

4. Rode em um emulador Android (pressione `a` no terminal) ou dispositivo físico compatível.

## Estrutura do projeto
src/
├── pages/
│   ├── Login.js
│   ├── Cadastro.js
│   ├── main.js       (tela de Cards)
│   └── Detalhes.js
├── services/
│   └── api.js        (integração com a AniList API)
└── routes.js          (navegação entre telas)
styles.js              (estilos com styled-components)
App.js


## Observações

- O app foi desenvolvido e testado utilizando emulador Android, já que o ambiente de desenvolvimento não possibilitava conexão via Expo Go na mesma rede do dispositivo físico.
- A busca de animes utiliza o endpoint público e gratuito da AniList API (`https://graphql.anilist.co`), sem necessidade de chave de autenticação.