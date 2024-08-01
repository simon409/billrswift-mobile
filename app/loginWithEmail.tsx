import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, LogBox } from "react-native";
import {Logo} from "@/assets/images"; // Import the SVG as a component
import { Colors } from "@/constants/Colors";

import { textSizes } from "@/constants/Sizes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginWithEmail = () => {
  const [EmailAddress, setEmailAddress] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <LottieView
          autoPlay
          loop
          style={styles.lottie}
          source={require("../assets/Lottie/BGOrangeYellow.json")}
        />
      </View>
      <View style={styles.foregroundContainer}>
        <View style={styles.centeredContent}>
          <Text>
            <Logo width={184.4} />
          </Text>
          <View style={styles.textContainer}>
            <Text style={styles.TiteInBack}>Se Connecter</Text>
            <Text style={styles.Title}>Se Connecter</Text>
          </View>
          <View style={{ width: "100%", gap: 15 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.TextInput}
                placeholder="example@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(text) => setEmailAddress(text)}
                value={EmailAddress}
                maxLength={9}
              />
            </View>
            <View
              style={[
                styles.inputContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <TextInput
                style={styles.TextInput}
                placeholder={"Entrer le mot de passe"}
                autoCapitalize={"none"}
                autoCorrect={false}
                secureTextEntry={!showPassword}
                textContentType={"password"}
              />
              <TouchableOpacity
                style={{ padding: 5 }}
                onPress={() => toggleShowPassword()}
              >
                <FontAwesome5
                  name={showPassword ? "eye" : "eye-slash"}
                  size={15}
                  color="gray"
                />
              </TouchableOpacity>
            </View>

            <View style={{ gap: 15 }}>
              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity style={styles.forgotPasswordButton}>
                  <Text style={styles.forgotPasswordText}>
                    Mot de passe oublié ?
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  console.log("LOGINWEmail");
                }}
                style={styles.Button}
              >
                <Text style={styles.Text}>Se connecter</Text>
              </TouchableOpacity>

              <View style={styles.separatorContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Ou</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  console.log("LOGINWEmail");
                }}
                style={[
                  styles.Button,
                  {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                    backgroundColor: "#E42E45",
                  },
                ]}
              >
                <FontAwesome
                  name="mobile-phone"
                  size={textSizes.large}
                  color={Colors.light.background}
                />
                <Text style={styles.Text}>avec téléphone</Text>
              </TouchableOpacity>
              <View style={styles.line} />
              <View style={{height: 100, justifyContent: 'space-between', paddingVertical: 10}}>
                <Text style={{textAlign: 'center', fontSize: textSizes.small}}>
                    En cliquant sur <Link href='/' style={styles.Links}>Conditions</Link>, vous acceptez nos <Link href='/' style={styles.Links}>Déclaration de confidentialité</Link> et notre.
                </Text>
                <Text style={{fontSize: textSizes.medium, textAlign: 'center'}}>
                    Vous n'avez pas de compte ? <Link href='/register' style={[styles.Links, {fontWeight:'bold'}]}>Inscrivez-vous</Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 23,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    top: "-100%",
    alignItems: "center",
  },
  lottie: {
    width: "300%",
    height: "100%",
    transform: [{ rotate: "180deg" }],
    marginLeft: "50%",
    backgroundColor: "rgba(0,0,0,0)",
  },
  foregroundContainer: {
    flex: 1,
    zIndex: 1,
  },
  centeredContent: {
    alignItems: "center",
    marginTop: "40%",
    flexDirection: "column",
    gap: 50,
    width: "100%",
  },
  textContainer: {
    width: "100%",
  },
  Title: {
    fontSize: textSizes.xxlarge,
    fontWeight: "bold",
    color: Colors.light.textColorOrange,
    textAlign: "center",
  },
  TiteInBack: {
    fontSize: 50,
    color: Colors.light.textColorOrange,
    letterSpacing: 1,
    textAlign: "center",
    position: "absolute",
    fontWeight: "bold",
    bottom: -5,
    left: 50,
    width: "100%",
    transform: [{ translateX: -50 }],
    zIndex: -1,
    opacity: 0.1,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: Colors.light.inputBackground,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  TextInput: {
    fontSize: textSizes.large,
    width: "80%",
  },

  forgotPasswordContainer: {
    width: "100%",
    alignItems: "flex-end",
  },
  forgotPasswordButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  forgotPasswordText: {
    color: Colors.light.textColorOrange,
    fontSize: textSizes.small,
  },
  Button: {
    backgroundColor: Colors.light.textColorOrange,
    borderRadius: 10,
    paddingVertical: 10,
  },
  Text: {
    fontSize: textSizes.large,
    color: Colors.light.background,
    textAlign: "center",
  },
  separatorContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  line: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
  },
  orText: {
    fontSize: textSizes.large,
    lineHeight: 25,
    textAlign: "center",
    position: 'absolute',
    backgroundColor: '#fff', // Ensures the text is visible
    paddingHorizontal: 10,
    top: -13,
    color: 'gray'
  },
  Links:{
    color: Colors.light.textColorOrange,
  }
});

export default LoginWithEmail;
