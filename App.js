import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import Showpage from "./src/screens/Showpage";

const navigator = createStackNavigator({
  Search: SearchScreen, 
  Showpage: Showpage
}, {
  initialRouteName: "Search",
  defaultNavigationOptions: {
    title: "Fooder"
  }
})
export default createAppContainer(navigator);

