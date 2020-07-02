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
  const [isLoading, setLoading] = useState(true);
  const [obj, setData] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function renderItem({ item }) {
    return (
      <ListItem
        style={styles.Card}
        title={item.title}
        linearGradientProps={{
          colors: ["#66CFCA", "#7B95C6"],
          start: [1, 1],
          end: [0.1, 0],
        }}
        chevron
        onPress={() => nav.navigate("photos", { albumId: item.id })}
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
    backgroundColor: "#66CFCA",
  },
  Card: {
    marginTop: 5,
    paddingTop: 4,
    paddingBottom: 4,
  },
});
