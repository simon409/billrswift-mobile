import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput, LogBox } from "react-native";
import {Logo} from "@/assets/images";
import { Colors } from "@/constants/Colors";
import { textSizes } from "@/constants/Sizes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import PhoneNumberInput from "./Components/PhoneCodePicker";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [countryCallingCode, setCountryCallingCode] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const navigation = useNavigation();

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

              <PhoneNumberInput setCountryCallingCode={setCountryCallingCode} />

              <Text style={{ fontSize: textSizes.large }}>
                {countryCallingCode}
              </Text>
              <TextInput
                style={styles.TextInput}
                placeholder="611 354 454"
                keyboardType="numeric"
                onChangeText={(text) => setPhoneNumber(text)}
                value={PhoneNumber}
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
                <TouchableOpacity onPress={()=>navigation.navigate('forgotPassword')} style={styles.forgotPasswordButton}>
                  <Text style={styles.forgotPasswordText}>
                    Mot de passe oublié ?
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: textSizes.medium, lineHeight: 25 }}>
                Des frais standard d'appel, de messagerie texte et de données
                peuvent s'appliquer.
              </Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("LOGIN");
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
                  navigation.navigate("loginWithEmail");
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
                <MaterialCommunityIcons
                  name="gmail"
                  size={textSizes.large}
                  color={Colors.light.background}
                />
                <Text style={styles.Text}>avec e-mail</Text>
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

export default Login;
