import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "../../screens/Album/List";
import AlbumPictures from "../../screens/Album/AlbumPictures";

const stack = createStackNavigator();
export default function PostStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="album"
        component={List}
        options={{ title: "Albums" }}
      />
      <stack.Screen
        name="photos"
        component={AlbumPictures}
        options={{ title: "Fotos del album" }}
      />
    </stack.Navigator>
  );
}
