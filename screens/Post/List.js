import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { Text, Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Lista() {
  const [isLoading, setLoading] = useState(true);
  const [obj, setData] = useState([]);
  const nav = useNavigation();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function renderItem({ item }) {
    return (
      <Card
        style={styles.Card}
        title={item.title}
        image={
          item.imgUrl ? { icon: { name: "user", type: "font-awesome" } } : null
        }
      >
        <Text style={{ marginBottom: 15 }}>{item.body}</Text>
        <Button
          title="Ver comentarios"
          onPress={() => nav.navigate("comments", { postId: item.id })}
        ></Button>
      </Card>
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
    marginTop: 100,
  },
});
