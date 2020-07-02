import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Text, Card, Badge } from "react-native-elements";

export default function Comments(props) {
  const postId = props["route"]["params"]["postId"];
  const [isLoading, setLoading] = useState(true);
  const [comments, setComment] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
      .then((response) => response.json())
      .then((json) => setComment(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function renderItem({ item }) {
    return (
      <Card style={styles.Card} title={item.name}>
        <Text style={{ marginBottom: 15 }}>{item.body}</Text>
        <Badge
          textStyle={{ fontSize: 20 }}
          value={item.email}
          status="success"
        />
      </Card>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={comments}
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
