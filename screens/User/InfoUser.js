import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";

export default function InfoUser(props) {
  const user = props["route"]["params"]["user"];

  function dataUser() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{user.name}</Text>
        <Avatar
          size="medium"
          rounded
          overlayContainerStyle={{
            backgroundColor: "#7B95C6",
          }}
          title={user.name[0] + user.name[1].toUpperCase()}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <Text style={styles.contend}>{user.email}</Text>
        <Text style={(styles.contend, { paddingBottom: 20 })}>
          {user.username}
        </Text>
        <Text style={(styles.title, { fontSize: 20, fontWeight: "bold" })}>
          Dirección
        </Text>
        <Text style={styles.contend}>Calle: {user.address.street}</Text>
        <Text style={styles.contend}>Ciudad: {user.address.city}</Text>
        <Text style={(styles.contend, { paddingBottom: 20 })}>
          C.P: {user.address.zipcode}
        </Text>
        <Text style={(styles.title, { fontSize: 20, fontWeight: "bold" })}>
          Trabajo
        </Text>
        <Text style={styles.contend}>{user.company.name}</Text>
        <Text style={styles.contend}>{user.company.catchPhrase}</Text>

        <Text style={styles.contend}>{user.phone}</Text>
      </View>
    );
  }

  return <View style={styles.container}>{dataUser()}</View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5E8B7",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  contend: {
    fontSize: 20,
  },
});
