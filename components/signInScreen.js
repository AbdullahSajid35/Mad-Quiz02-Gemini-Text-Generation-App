import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState();

  const handleSignIn = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.appName}>Sign In</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
        <Pressable
          onPress={handleSignIn}
          style={[styles.btn, { marginTop: error ? 10 : 20 }]}
        >
          <Text style={styles.btnText}>
            {loading ? "Processing..." : "Sign In"}
          </Text>
        </Pressable>
        {/* Sign up navigation */}
        <Pressable
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpContainer}
        >
          <Text style={styles.noAccountLabel}>
            Don't have an account?{"  "}
            <Text style={styles.signUpLabel}>Create an account</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5", // Changed background color
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: "#1E90FF", // Changed app name color
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF", // Changed input background color
    padding: 10,
    height: 40,
    borderRadius: 5,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1, // Added border
    borderColor: "#1E90FF", // Border color
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#1E90FF", // Changed button background color
    padding: 10,
    height: 45,
    borderRadius: 5,
    width: "100%",
    marginTop: 20,
  },
  btnText: {
    color: "#FFFFFF", // Changed button text color
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpContainer: {
    marginTop: 20,
  },
  noAccountLabel: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  signUpLabel: {
    color: "#1E90FF", // Changed sign up label color
  },
});

export default SignInScreen;
