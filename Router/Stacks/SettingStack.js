import SetingPassword from "../../screens/GlobalSettings/Password";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../../screens/GlobalSettings/Settings";
import React from "react";

const stack = createStackNavigator();
export default function SettingStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="setings"
        component={Settings}
        options={{ title: "Pantalla de Configuración" }}
      ></stack.Screen>
      <stack.Screen
        name="setingPass"
        component={SetingPassword}
        options={{ title: "Configuracion de Contraseña" }}
      ></stack.Screen>
    </stack.Navigator>
  );
}
