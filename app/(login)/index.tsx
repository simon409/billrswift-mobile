import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput } from "react-native";
import {Logo} from "@/assets/images";
import { Colors } from "@/constants/Colors";
import { textSizes } from "@/constants/Sizes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import PhoneNumberInput from "./Components/PhoneCodePicker";
import { indexStyles } from "./styles/style";

const Login = () => {
  const [countryCallingCode, setCountryCallingCode] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const router = useRouter();


  const toggleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={indexStyles.container}>
      <View style={indexStyles.backgroundContainer}>
        <LottieView
          autoPlay
          loop
          style={indexStyles.lottie}
          source={require("@/assets/Lottie/BGOrangeYellow.json")}
        />
      </View>
      <View style={indexStyles.foregroundContainer}>
        <View style={indexStyles.centeredContent}>
          <Text>
            <Logo width={184.4} />
          </Text>
          <View style={indexStyles.textContainer}>
            <Text style={indexStyles.TiteInBack}>Se Connecter</Text>
            <Text style={indexStyles.Title}>Se Connecter</Text>
          </View>
          <View style={{ width: "100%", gap: 15 }}>
            <View style={indexStyles.inputContainer}>

              <PhoneNumberInput setCountryCallingCode={setCountryCallingCode} />

              <Text style={{ fontSize: textSizes.large }}>
                {countryCallingCode}
              </Text>
              <TextInput
                style={indexStyles.TextInput}
                placeholder="611 354 454"
                keyboardType="numeric"
                onChangeText={(text) => setPhoneNumber(text)}
                value={PhoneNumber}
                maxLength={9}
              />
            </View>
            <View
              style={[
                indexStyles.inputContainer,
                { justifyContent: "space-between" },
              ]}
            >
              <TextInput
                style={indexStyles.TextInput}
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
              <View style={indexStyles.forgotPasswordContainer}>
                <TouchableOpacity onPress={()=>router.replace('/forgotPassword')} style={indexStyles.forgotPasswordButton}>
                  <Text style={indexStyles.forgotPasswordText}>
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
                style={indexStyles.Button}
              >
                <Text style={indexStyles.Text}>Se connecter</Text>
              </TouchableOpacity>

              <View style={indexStyles.separatorContainer}>
                <View style={indexStyles.line} />
                <Text style={indexStyles.orText}>Ou</Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  router.replace("/loginWithEmail");
                }}
                style={[
                  indexStyles.Button,
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
                <Text style={indexStyles.Text}>avec e-mail</Text>
              </TouchableOpacity>
              <View style={indexStyles.line} />
              <View style={{height: 100, justifyContent: 'space-between', paddingVertical: 10}}>
                <Text style={{textAlign: 'center', fontSize: textSizes.small}}>
                    En cliquant sur <Link href='/' style={indexStyles.Links}>Conditions</Link>, vous acceptez nos <Link href='/' style={indexStyles.Links}>Déclaration de confidentialité</Link> et notre.
                </Text>
                <Text style={{fontSize: textSizes.medium, textAlign: 'center'}}>
                    Vous n'avez pas de compte ? <Link href='(register)' style={[indexStyles.Links, {fontWeight:'bold'}]}>Inscrivez-vous</Link>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};



export default Login;
