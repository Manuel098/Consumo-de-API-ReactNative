import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Card, Text } from "react-native-elements";

export default function AlbumPictures(props) {
  const albumId = props["route"]["params"]["albumId"];
  const [isLoading, setLoading] = useState(true);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + albumId)
      .then((response) => response.json())
      .then((json) => setPhoto(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function renderItem({ item }) {
    return (
      <Card
        style={styles.Card}
        title={item.title}
        imageStyle={{
          resizeMode: "cover",
        }}
        image={
          item.id < 1030
            ? { uri: "https://picsum.photos/id/" + item.id + "/500/300.jpg" }
            : {
                uri: "https://picsum.photos/id/1/500/300.jpg",
                body: "Imagen Fuera de Rango",
              }
        }
      >
        {item.id < 1030 ? null : <Text>Imagen Fuera de Rango</Text>}
      </Card>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={photo}
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
