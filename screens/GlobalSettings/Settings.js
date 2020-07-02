import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Pantaya de Settings</Text>
      <Button
        title="Editar Contraseña"
        onPress={() => {
          nav.navigate("setingPass");
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
