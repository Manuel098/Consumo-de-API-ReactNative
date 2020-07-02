import { createStackNavigator } from "@react-navigation/stack";
import Comments from "../../screens/Post/Comments";
import Post from "../../screens/Post/List";
import React from "react";

const stack = createStackNavigator();
export default function AlbumStack() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="posts"
        component={Post}
        options={{ title: "Lista de Posts" }}
      />
      <stack.Screen
        name="comments"
        component={Comments}
        options={{ title: "Comentarios" }}
      />
    </stack.Navigator>
  );
}
