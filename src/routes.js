import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Main from "./pages/main";
import Detalhes from "./pages/detalhes";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerLeft: null,
          title: "LOGIN",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#8400ff" },
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        }}
      />
      <Stack.Screen
        name="cadastro"
        component={Cadastro}
        options={{
          title: "Cadastro de Usuário",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#8400ff" },
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        }}
      />
      <Stack.Screen
        name="main"
        component={Main}
        options={({ navigation }) => ({
          headerLeft: null,
          title: "CARDS",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#8400ff" },
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
          headerRight: () => (
            <Ionicons
              name="log-out-outline"
              size={24}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => {
                Alert.alert(
                  "Sair",
                  "Tem certeza que deseja sair?",
                  [
                    { text: "Cancelar", style: "cancel" },
                    { text: "Sair", style: "destructive", onPress: () => navigation.replace("login") },
                  ]
                );
              }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="detalhes"
        component={Detalhes}
        options={{
          title: "Detalhes",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#8400ff" },
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        }}
      />
    </Stack.Navigator>
  );
}