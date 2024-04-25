import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginTop: 20,
          }}
        >
          {" "}
          Gemini Text Generation
        </Text>
        <Pressable
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={() => navigation.push("Gemini")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Go To Model
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
