import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./components/signUpScreen";
import SignInScreen from "./components/signInScreen";
import QuestionAnswering from "./components/questionAnswering";
import Home from "./components/home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />

        <Stack.Screen
          name="Gemini"
          component={QuestionAnswering}
          options={{ title: "Gemini" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
