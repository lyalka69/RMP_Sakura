import React from "react";
import Main from "./Main";
import FullArticle from "./FullArticle";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navi() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Главная",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#3949AB", height: 100 },
            headerTitleStyle: { 
              fontWeight: "bold", 
              fontSize: 20,
              color: "#fff",
              fontFamily: "onest-bold",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="FullArticleScreenName"
          component={FullArticle}
          options={{
            title: "Полная статья",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#3949AB", height: 100 },
            headerTitleStyle: { 
              fontWeight: "bold", 
              fontSize: 20,
              color: "#fff",
              fontFamily: "onest-bold",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}