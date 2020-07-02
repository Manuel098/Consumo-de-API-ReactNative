import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import SettingStack from "./Stacks/SettingStack";
import AlbumStack from "./Stacks/AlbumStack";
import PostStack from "./Stacks/PostStack";
import UserStack from "./Stacks/UserStack";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import React from "react";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            route.name === "users"
              ? (iconName = focused ? "users" : "users")
              : route.name === "posts"
              ? (iconName = focused ? "clipboard" : "clipboard")
              : (iconName = focused ? "image" : "image");

            return (
              <Icon
                type="font-awesome"
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="users"
          options={{ title: "Usuarios" }}
          component={UserStack}
        />
        <Tab.Screen
          name="posts"
          options={{ title: "Posts" }}
          component={PostStack}
        />
        <Tab.Screen
          name="albums"
          options={{ title: "Albums" }}
          component={AlbumStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
