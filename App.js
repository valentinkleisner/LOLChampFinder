import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchChampionScreen from "./screens/SearchChampionScreen";
import ChampionDetailScreen from "./screens/ChampionDetailScreen";


export default function App() {
  const Stack = createStackNavigator();

    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"searchChampion"} >
        <Stack.Screen name={"searchChampion"} component={SearchChampionScreen}/>
        <Stack.Screen name={"championDetails"} component={ChampionDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
