import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Keyboard, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Logo} from "@/assets/images"; // Import the SVG as a component
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';
import CustomCheckBox from '@/components/CustomCheckBox';
import { Link, useRouter } from 'expo-router';
import PhoneNumberInput from '../(login)/Components/PhoneCodePicker';
import { FontAwesome5 } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { indexStyles } from './styles/style';


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

    const router = useRouter();


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
        <SafeAreaView style={indexStyles.Container}>
            <View style={indexStyles.backgroundContainer}>
                    <LottieView
                    autoPlay
                    loop
                    style={indexStyles.lottie}
                    source={require("@/assets/Lottie/BGOrangeYellow.json")}
                    />
            </View>
            <ScrollView style={{position: 'relative'}}>
                <View>
                    <View style={indexStyles.TextsContainer}>
                        <View>
                            <Logo width={184.4} />
                        </View>
                        <View>
                            <Animated.Text style={[indexStyles.TiteInBack, titleInBackAnimatedStyle]}>Créer</Animated.Text>
                            <Animated.Text style={[indexStyles.Title, titleAnimatedStyle]}>Créer un compte
                            Billrswift</Animated.Text>
                        </View>
                        <Animated.Text style={[indexStyles.SubTitle, subTitleAnimatedStyle]}>
                            En savoir plus
                        </Animated.Text>
                    </View>
                </View>
                <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={indexStyles.innerContainer}
                keyboardShouldPersistTaps='handled'
                >
                <View style={indexStyles.Card}>
                    <View style={{ gap: 10 }}>
                        <Text style={indexStyles.CardText}>Adresse e-mail</Text>
                        <View style={indexStyles.inputContainer}>
                            <TextInput
                                style={indexStyles.CardInput}
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
                        <Text style={indexStyles.CardText}>Mot de passe</Text>
                        <View
                            style={[
                                indexStyles.inputContainer,
                                { justifyContent: "space-between" },
                            ]}
                            >
                            <TextInput
                                style={indexStyles.CardInput}
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
                        <Text style={indexStyles.CardText}>Téléphone</Text>
                            <View style={[indexStyles.inputContainer, {paddingHorizontal: 23,}]}>
                                <PhoneNumberInput setCountryCallingCode={setCountryCallingCode} />
                                <Text style={{ fontSize: textSizes.large }}>
                                    {countryCallingCode}
                                </Text>
                                <TextInput
                                    style={[indexStyles.CardInput, {width: '70%', paddingHorizontal: 0}]}
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
                        <TouchableOpacity onPress={()=>{router.replace("/(otp)")}} style={indexStyles.Button}>
                            <Text style={indexStyles.TextButton}>Suivant</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{textAlign: 'center', fontSize: textSizes.small}}>
                    En appuyant sur Créer un compte, vous acceptez nos  <Link href='/' style={indexStyles.Links}>Conditions</Link> et reconnaissez avoir lu et compris notre <Link href='/' style={indexStyles.Links}>Déclaration de confidentialité</Link>.
                </Text>
                <Text style={{fontSize: textSizes.medium, textAlign: 'center'}}>
                    Vous n'avez pas de compte ? <Link href='/register' style={[indexStyles.Links, {fontWeight:'bold'}]}>Inscrivez-vous</Link>
                </Text>
            </Animated.ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Register;
