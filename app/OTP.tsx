import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Animated, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { textSizes } from '@/constants/Sizes';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

const OTP = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState(false);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const firstInputRef = useRef<TextInput>(null);
    const secondInputRef = useRef<TextInput>(null);
    const thirdInputRef = useRef<TextInput>(null);
    const fourthInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();

    const firstScale = useRef(new Animated.Value(1)).current;
    const secondScale = useRef(new Animated.Value(1)).current;
    const thirdScale = useRef(new Animated.Value(1)).current;
    const fourthScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Simulate receiving the OTP code (e.g., from an API or SMS)
        const receivedOtp = '';  // Replace with actual received OTP
        if(receivedOtp.length === 4) {
            setOtp(receivedOtp.split(''));
        }
    }, []);

    useEffect(() => {
        if (firstInputRef.current) {
            firstInputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const CorrectOTP = '1234'; // Replace with actual OTP
        if (otp.join('').length === 4 && otp.join('') === CorrectOTP) {
            navigation.navigate('otherInfos');
        }
        else if (otp.join('').length === 4) {
            setError(true);
        }
        else {
            setError(false);
        }
    }, [otp]);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleInputChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move focus to the next field
        if (text.length === 1) {
            switch (index) {
                case 0:
                    secondInputRef.current?.focus();
                    break;
                case 1:
                    thirdInputRef.current?.focus();
                    break;
                case 2:
                    fourthInputRef.current?.focus();
                    break;
                default:
                    break;
            }
        }
    };

    const animateInput = (animatedValue: Animated.Value, toValue: number) => {
        Animated.timing(animatedValue, {
            toValue,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: true,
        }).start();
    };

    const handleResend = () => {
        if (canResend) {
            // Resend OTP logic here
            setCanResend(false);
            setTimer(60);
            // Optionally, clear the OTP fields
            setOtp(['', '', '', '']);
            if (firstInputRef.current) {
                firstInputRef.current.focus();
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* OTP */}
            <View>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ width: "20%" }}>
                        <TouchableOpacity >
                            <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "60%", justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: textSizes.large }}>Vérifier le code</Text>
                    </View>
                    <View style={{ width: "20%" }}></View>
                </View>
                {/* Body */}
                <View style={{ paddingHorizontal: 16, marginTop: 90, display: 'flex', gap: 50 }}>
                    <Text style={{ fontSize: textSizes.medium }}>
                        Vérifiez votre adresse email, nous vous avons envoyé le code à
                        <Text style={{ color: Colors.light.textColorOrange }}> example@gmail.com</Text>
                    </Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 40, justifyContent: "center", alignItems: "center" }}>
                        <Animated.View style={{ transform: [{ scale: firstScale }] }}>
                            <TextInput
                                ref={firstInputRef}
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                selectionColor={"#E76936"}
                                value={otp[0]}
                                onChangeText={(text) => handleInputChange(text, 0)}
                                onFocus={() => animateInput(firstScale, 1.1)}
                                onBlur={() => animateInput(firstScale, 1)}
                            />
                        </Animated.View>
                        <Animated.View style={{ transform: [{ scale: secondScale }] }}>
                            <TextInput
                                ref={secondInputRef}
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                selectionColor={"#E76936"}
                                value={otp[1]}
                                onChangeText={(text) => handleInputChange(text, 1)}
                                onFocus={() => animateInput(secondScale, 1.1)}
                                onBlur={() => animateInput(secondScale, 1)}
                            />
                        </Animated.View>
                        <Animated.View style={{ transform: [{ scale: thirdScale }] }}>
                            <TextInput
                                ref={thirdInputRef}
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                selectionColor={"#E76936"}
                                value={otp[2]}
                                onChangeText={(text) => handleInputChange(text, 2)}
                                onFocus={() => animateInput(thirdScale, 1.1)}
                                onBlur={() => animateInput(thirdScale, 1)}
                            />
                        </Animated.View>
                        <Animated.View style={{ transform: [{ scale: fourthScale }] }}>
                            <TextInput
                                ref={fourthInputRef}
                                style={styles.input}
                                maxLength={1}
                                keyboardType="numeric"
                                selectionColor={"#E76936"}
                                value={otp[3]}
                                onChangeText={(text) => handleInputChange(text, 3)}
                                onFocus={() => animateInput(fourthScale, 1.1)}
                                onBlur={() => animateInput(fourthScale, 1)}
                            />
                        </Animated.View>
                    </View>
                    {
                        error && <Text style={{ color: 'red' }}>Code incorrect</Text>
                    }
                    <View style={{display: 'flex', gap: 10}}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: textSizes.small }}>Vous n'avez pas reçu le code ?</Text>
                            <TouchableOpacity onPress={handleResend} disabled={!canResend}>
                                <Text style={{ color: canResend ? Colors.light.textColorOrange : '#bbb', fontSize: textSizes.small }}>
                                    Renvoyer
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{display: 'flex', alignItems: 'flex-end'}}>
                            <Text style={{ fontSize: textSizes.small }}>(00:{timer < 10 ? '0'+timer : timer})</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 23,
        paddingVertical: 18,
        backgroundColor: Colors.light.background
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
    },
    input: {
        width: 50,
        textAlign: 'center',
        fontSize: textSizes.large,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: "#F5F6FA",
        borderRadius: 10,
    }
});

export default OTP;
