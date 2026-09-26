import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Main from "./pages/main";

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
        options={{
          headerLeft: null,
          title: "CARDS",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#8400ff" },
          headerTitleStyle: { fontWeight: "bold", color: "#fff" },
        }}
      />
    </Stack.Navigator>
  );
}