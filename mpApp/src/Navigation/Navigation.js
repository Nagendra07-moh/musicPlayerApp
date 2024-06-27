import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import ScrollList from "../Components/ScrollList";
import Tracks from "../Screens/Tracks";
import Song from "../Screens/Song";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScrollList"
          component={ScrollList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tracks"
          component={Tracks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Song"
          component={Song}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
