import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from "../assets/images/LOGO.svg"; // Import the SVG as a component
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';
import CustomCheckBox from '@/components/CustomCheckBox';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import PhoneNumberInput from './Components/PhoneCodePicker';
import { FontAwesome5 } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';


const Register = () => {
    const titleOpacity = useSharedValue(0);
    const subTitleOpacity = useSharedValue(0);
    const titleInBackOpacity = useSharedValue(0);
    const buttonTranslateY = useSharedValue(50);
    const [IsSelected, setIsSelected] = useState(false);
    const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
    const scrollViewRef = useRef<AnimatedScrollView>(null);

    const [countryCallingCode, setCountryCallingCode] = useState<string>("");
    const [PhoneNumber, setPhoneNumber] = useState<string>("");
    const [showPassword, setshowPassword] = useState<boolean>(false);
    const [EmailAddress, setEmailAddress] = useState<string>("");
    const navigation = useNavigation();

    const toggleShowPassword = () => {
        setshowPassword(!showPassword);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        if (keyboardVisible) {
            scrollViewRef.current?.scrollTo({ y: 200, animated: true });
        }
    }, [keyboardVisible]);

    useEffect(() => {
        titleOpacity.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.exp) });
        titleInBackOpacity.value = withTiming(0.1, { duration: 500, easing: Easing.out(Easing.exp) });
        subTitleOpacity.value = withTiming(1, { duration: 500, easing: Easing.out(Easing.exp) });
        buttonTranslateY.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.exp) });
    }, []);

    const titleAnimatedStyle = useAnimatedStyle(() => ({
        opacity: titleOpacity.value,
    }));

    const titleInBackAnimatedStyle = useAnimatedStyle(() => ({
        opacity: titleInBackOpacity.value,
    }));

    const subTitleAnimatedStyle = useAnimatedStyle(() => ({
        opacity: subTitleOpacity.value,
    }));


    const ToggleIsSelected = () => {
        setIsSelected(!IsSelected);
    }


    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.backgroundContainer}>
                    <LottieView
                    autoPlay
                    loop
                    style={styles.lottie}
                    source={require("../assets/Lottie/BGOrangeYellow.json")}
                    />
            </View>
            <ScrollView style={{position: 'relative'}}>
                <View>
                    <View style={styles.TextsContainer}>
                        <View>
                            <Logo width={184.4} />
                        </View>
                        <View>
                            <Animated.Text style={[styles.TiteInBack, titleInBackAnimatedStyle]}>Créer</Animated.Text>
                            <Animated.Text style={[styles.Title, titleAnimatedStyle]}>Créer un compte
                            Billrswift</Animated.Text>
                        </View>
                        <Animated.Text style={[styles.SubTitle, subTitleAnimatedStyle]}>
                            En savoir plus
                        </Animated.Text>
                    </View>
                </View>
                <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.innerContainer}
                keyboardShouldPersistTaps='handled'
                >
                <View style={styles.Card}>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.CardText}>Adresse e-mail</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.CardInput}
                                placeholder="exemple@gmail.com"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(text) => setEmailAddress(text)}
                                value={EmailAddress}
                                maxLength={9}
                            />
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.CardText}>Mot de passe</Text>
                        <View
                            style={[
                                styles.inputContainer,
                                { justifyContent: "space-between" },
                            ]}
                            >
                            <TextInput
                                style={styles.CardInput}
                                placeholder={"*************"}
                                autoCapitalize={"none"}
                                autoCorrect={false}
                                secureTextEntry={!showPassword}
                                textContentType={"password"}
                            />
                            <TouchableOpacity
                                style={{ padding: 5, position: 'absolute', right: 23 }}
                                onPress={() => toggleShowPassword()}
                            >
                                <FontAwesome5
                                name={showPassword ? "eye" : "eye-slash"}
                                size={15}
                                color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.CardText}>Téléphone</Text>
                            <View style={[styles.inputContainer, {paddingHorizontal: 23,}]}>
                                <PhoneNumberInput setCountryCallingCode={setCountryCallingCode} />
                                <Text style={{ fontSize: textSizes.large }}>
                                    {countryCallingCode}
                                </Text>
                                <TextInput
                                    style={[styles.CardInput, {width: '70%', paddingHorizontal: 0}]}
                                    placeholder="611 354 454"
                                    keyboardType="numeric"
                                    onChangeText={(text) => setPhoneNumber(text)}
                                    value={PhoneNumber}
                                    maxLength={9}
                                />
                            </View>
                    </View>
                    <View style={{paddingHorizontal: 23, gap: 20}}>
                        <Text>Des frais standard d'appel, de messagerie texte et de données peuvent s'appliquer.</Text>
                        <View style={{display: 'flex', gap: 10, flexDirection: 'row'}}>
                            <Text style={{width: '90%', color: Colors.light.textColorOrange}}>
                                J'accepte de recevoire des communications commerciales par e-mail et par SMS pour les produits et services proposés par Billrswift online et ses partenaires commerciaux.
                            </Text>
                            <CustomCheckBox IsSelected={IsSelected} OnPress={ToggleIsSelected}/>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{navigation.navigate("OTP")}} style={styles.Button}>
                            <Text style={styles.TextButton}>Suivant</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{textAlign: 'center', fontSize: textSizes.small}}>
                    En appuyant sur Créer un compte, vous acceptez nos  <Link href='/' style={styles.Links}>Conditions</Link> et reconnaissez avoir lu et compris notre <Link href='/' style={styles.Links}>Déclaration de confidentialité</Link>.
                </Text>
                <Text style={{fontSize: textSizes.medium, textAlign: 'center'}}>
                    Vous n'avez pas de compte ? <Link href='/register' style={[styles.Links, {fontWeight:'bold'}]}>Inscrivez-vous</Link>
                </Text>
            </Animated.ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.light.background,
        justifyContent: 'space-between',
        position: 'relative',
      },
      backgroundContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        top: "-120%",
        alignItems: "center",
      },
      lottie: {
        width: "300%",
        height: "100%",
        transform: [{ rotate: "-90deg" }],
        marginLeft: "50%",
        left: "45%",
        backgroundColor: "rgba(0,0,0,0)",
      },
      TextsContainer: {
          display: 'flex',
          flexDirection: 'column',
          gap: 50,
          paddingHorizontal: 23,
          paddingVertical:23
      },
      Title: {
          fontSize: textSizes.xxlarge,
          color: Colors.light.textColorOrange,
          letterSpacing: 1,
          textAlign: 'left',
          fontWeight: 'bold',
      },
      TiteInBack:{
          fontSize: 60,
          color: Colors.light.textColorOrange,
          letterSpacing: 1,
          textAlign: 'left',
          position: 'absolute',
          fontWeight: 'bold',
          bottom: 25,
          left: 0,
          zIndex: -1,
          opacity: 0.1,
      },
      SubTitle: {
          fontSize: textSizes.large,
          color: "#c1c1c1",
      },

      innerContainer: {
        flexGrow: 1,
        paddingHorizontal: 23,
        gap: 30,
        paddingVertical: 18,
        justifyContent: 'space-between',
    },
    LogOutText: {
        color: Colors.light.textColorOrange,
        fontSize: textSizes.medium,
        marginTop: 10,
        paddingHorizontal: 23,
    },
    Card: {
        backgroundColor: Colors.light.background,
        paddingVertical: 23,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
    },
    CardText: {
        color: Colors.light.textColorOrange,
        fontSize: textSizes.medium,
        marginTop: 10,
        paddingHorizontal: 23,
    },
    CardInput: {
        backgroundColor: '#F5F6FA',
        paddingVertical: 10,
        paddingHorizontal: 23,
        width: '100%',
        fontSize: textSizes.large,
    },
    /*

    TextInput: {
        fontSize: textSizes.large,
        width: "80%",
      },*/
    Button: {
        backgroundColor: Colors.light.textColorOrange,
        borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 23,
        fontSize: textSizes.large,
        color: Colors.light.background,
    },
    TextButton: {
        color: '#fff',
        fontSize: textSizes.large,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Links:{
        color: Colors.light.textColorOrange,
    },
    inputContainer: {
        width: "100%",
        backgroundColor: Colors.light.inputBackground,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomColor: '#CBC9D9',
        borderBottomWidth: 1,
      },
      TextInput: {
        fontSize: textSizes.large,
        width: "80%",
      },
})

export default Register;
