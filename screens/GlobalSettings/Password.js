import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SetingPassword() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Pantaya de Edicion de Contraseña</Text>
      <Button
        title="Regresar a Configuraciones"
        onPress={() => {
          nav.navigate("setings");
        }}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
