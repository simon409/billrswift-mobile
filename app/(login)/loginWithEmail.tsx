import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import {Logo} from "@/assets/images"; // Import the SVG as a component
import { Colors } from "@/constants/Colors";

import { textSizes } from "@/constants/Sizes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginWithEmailStyles } from "./styles/style";

const LoginWithEmail = () => {
  const [EmailAddress, setEmailAddress] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  return (
    <SafeAreaView style={loginWithEmailStyles.container}>
      <View style={loginWithEmailStyles.backgroundContainer}>
        <LottieView
          autoPlay
          loop
          style={loginWithEmailStyles.lottie}
          source={require("@/assets/Lottie/BGOrangeYellow.json")}
        />
      </View>
      <View style={loginWithEmailStyles.foregroundContainer}>
        <View style={loginWithEmailStyles.centeredContent}>
          <Text>
            <Logo width={184.4} />
          </Text>
          <View style={loginWithEmailStyles.textContainer}>
            <Text style={loginWithEmailStyles.TiteInBack}>Se Connecter</Text>
            <Text style={loginWithEmailStyles.Title}>Se Connecter</Text>
          </View>
          <View style={{ width: "100%", gap: 15 }}>
            <View style={loginWithEmailStyles.inputContainer}>
              <TextInput
                style={loginWithEmailStyles.TextInput}
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
                loginWithEmailStyles.inputContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <TextInput
                style={loginWithEmailStyles.TextInput}
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
              <View style={loginWithEmailStyles.forgotPasswordContainer}>
                <TouchableOpacity style={loginWithEmailStyles.forgotPasswordButton}>
                  <Text style={loginWithEmailStyles.forgotPasswordText}>
                    Mot de passe oublié ?
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  console.log("LOGINWEmail");
                }}
                style={loginWithEmailStyles.Button}
              >
                <Text style={loginWithEmailStyles.Text}>Se connecter</Text>
              </TouchableOpacity>

              <View style={loginWithEmailStyles.separatorContainer}>
                <View style={loginWithEmailStyles.line} />
                <Text style={loginWithEmailStyles.orText}>Ou</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  console.log("LOGINWEmail");
                }}
                style={[
                  loginWithEmailStyles.Button,
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
                <Text style={loginWithEmailStyles.Text}>avec téléphone</Text>
              </TouchableOpacity>
              <View style={loginWithEmailStyles.line} />
              <View style={{height: 100, justifyContent: 'space-between', paddingVertical: 10}}>
                <Text style={{textAlign: 'center', fontSize: textSizes.small}}>
                    En cliquant sur <Link href='/' style={loginWithEmailStyles.Links}>Conditions</Link>, vous acceptez nos <Link href='/' style={loginWithEmailStyles.Links}>Déclaration de confidentialité</Link> et notre.
                </Text>
                <Text style={{fontSize: textSizes.medium, textAlign: 'center'}}>
                    Vous n'avez pas de compte ? <Link href='/register' style={[loginWithEmailStyles.Links, {fontWeight:'bold'}]}>Inscrivez-vous</Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginWithEmail;
