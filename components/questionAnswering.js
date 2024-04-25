import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";

const App = () => {
  const API_KEY = "YOUR_API_KEY"; 

  const [data, setData] = useState(undefined);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchDataFromGeminiProAPI = async () => {
    try {
      if (!inputText) {
        alert("Please enter text!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const result = await model.generateContent(inputText);
      const text = result.response.text();
      setLoading(false);
      setData(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  };

  const fetchDataFromGeminiProVisionAPI = async () => {
    try {
      if (!inputText) {
        alert("Please enter text!");
        return;
      }
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const result = await model.generateContent(inputText);
      const text = result.response.text();
      setLoading(false);
      setData(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  };

  const renderResponseText = () => {
    if (!data) {
      return null;
    }

    // Split the response text into lines
    const lines = data.split("\n");

    // Map each line to a component
    return lines.map((line, index) => {
      // Check if the line starts with '**' indicating a heading
      if (line.startsWith("**")) {
        // Remove the '**' and render the line as a heading
        return (
          <Text
            key={index}
            style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
          >
            {line.substring(2)}
          </Text>
        );
      } else {
        // Render other lines as regular text
        return (
          <Text key={index} style={{ fontSize: 16, marginTop: 5 }}>
            {line}
          </Text>
        );
      }
    });
  };

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
            marginTop: 20,
          }}
        >
          Google AI Gemini Integration
        </Text>
        <TextInput
          style={{
            width: "100%",
            borderWidth: 1,
            borderColor: "gray",
            padding: 10,
            marginBottom: 20,
          }}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Enter text"
        />
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            padding: 15,
            borderRadius: 5,
            marginBottom: 10,
          }}
          onPress={fetchDataFromGeminiProAPI}
          disabled={loading}
        >
          <Text style={{ color: "#FFF", textAlign: "center", fontSize: 16 }}>
            {loading ? "Loading..." : "Submit"}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            padding: 15,
            borderRadius: 5,
            marginBottom: 20,
          }}
          onPress={fetchDataFromGeminiProVisionAPI}
          disabled={loading}
        >
          <Text style={{ color: "#FFF", textAlign: "center", fontSize: 16 }}>
            {loading ? "Loading..." : "Get PRO Vision data"}
          </Text>
        </TouchableOpacity> */}
        {loading && <ActivityIndicator />}
        <View style={{ alignItems: "center" }}>{renderResponseText()}</View>
      </View>
    </ScrollView>
  );
};

export default App;
