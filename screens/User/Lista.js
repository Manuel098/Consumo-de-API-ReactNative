import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Lista() {
  const useNav = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [obj, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function renderItem({ item }) {
    return (
      <ListItem
        style={styles.FlList}
        title={item.name}
        subtitle={item.username}
        leftAvatar={{ icon: { name: "user", type: "font-awesome" } }}
        bottomDivider
        linearGradientProps={{
          colors: ["#C5E8B7", "#57C84D"],
          start: [0.7, 1],
          end: [0.1, 0],
        }}
        onPress={() => useNav.navigate("infoUser", { user: item })}
        chevron
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={obj}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={renderItem}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C5E8B7",
  },
  FlList: {
    marginTop: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
});
