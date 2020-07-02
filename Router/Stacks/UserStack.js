import { createStackNavigator } from "@react-navigation/stack";
import InfoUser from "../../screens/User/InfoUser";
import Lista from "../../screens/User/Lista";
import React from "react";

const stack = createStackNavigator();

export default function UserStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="list"
        component={Lista}
        options={{ title: "Lista de Usuarios" }}
      />
      <stack.Screen
        name="infoUser"
        component={InfoUser}
        options={{ title: "Detalles" }}
      />
    </stack.Navigator>
  );
}
