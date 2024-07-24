import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from './Components/ProgressBar';
import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';
import Animated from 'react-native-reanimated';

const Register = () => {
    const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
    const scrollViewRef = useRef<AnimatedScrollView>(null);

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

    return (
        <SafeAreaView style={styles.container}>
            <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={styles.innerContainer}
                keyboardShouldPersistTaps='handled'
            >
                <View style={{ gap: 30 }}>
                    <TouchableOpacity>
                        <Text style={styles.LogOutText}>Se déconnecter</Text>
                    </TouchableOpacity>
                    <ProgressBar progress={20} />
                    <Text style={{ fontSize: textSizes.xxlarge, color: Colors.light.textColorOrange, fontWeight: 'bold' }}>
                        Bienvenue ! pour commencer, nous avons besoin de quelques infos.
                    </Text>
                </View>
                <View style={styles.Card}>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.CardText}>Nom</Text>
                        <TextInput placeholder="Nexular corp" style={styles.CardInput} />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.CardText}>Pays ou région</Text>
                        <TextInput placeholder="Maroc" style={styles.CardInput} />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={styles.CardText}>Devise</Text>
                        <TextInput placeholder="MAD - Moroccan Dirham" style={styles.CardInput} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.TextButton}>Suivant</Text>
                    </TouchableOpacity>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flexGrow: 1,
        backgroundColor: "#fff",
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
        borderBottomColor: '#CBC9D9',
        borderBottomWidth: 1,
    },
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
})

export default Register;
