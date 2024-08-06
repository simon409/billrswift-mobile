import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../(login)/Components/ProgressBar';
import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';
import Animated from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import { otherInfosStyles } from './styles/style';

const OtherInfos = () => {
    const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
    const scrollViewRef = useRef<AnimatedScrollView>(null);
    const router = useRouter();


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

    const HandelNext = () => {
        console.log("Next");
        router.replace('/congrates');
    }

    return (
        <SafeAreaView style={otherInfosStyles.container}>
            <Animated.ScrollView
                ref={scrollViewRef}
                contentContainerStyle={otherInfosStyles.innerContainer}
                keyboardShouldPersistTaps='handled'
            >
                <View style={{ gap: 30 }}>
                    <TouchableOpacity>
                        <Text style={otherInfosStyles.LogOutText}>Se déconnecter</Text>
                    </TouchableOpacity>
                    <ProgressBar progress={20} />
                    <Text style={{ fontSize: textSizes.xxlarge, color: Colors.light.textColorOrange, fontWeight: 'bold' }}>
                        Bienvenue ! pour commencer, nous avons besoin de quelques infos.
                    </Text>
                </View>
                <View style={otherInfosStyles.Card}>
                    <View style={{ gap: 10 }}>
                        <Text style={otherInfosStyles.CardText}>Nom</Text>
                        <TextInput placeholder="Nexular corp" style={otherInfosStyles.CardInput} />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={otherInfosStyles.CardText}>Pays ou région</Text>
                        <TextInput placeholder="Maroc" style={otherInfosStyles.CardInput} />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={otherInfosStyles.CardText}>Devise</Text>
                        <TextInput placeholder="MAD - Moroccan Dirham" style={otherInfosStyles.CardInput} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>HandelNext()} style={otherInfosStyles.Button}>
                        <Text style={otherInfosStyles.TextButton}>Suivant</Text>
                    </TouchableOpacity>
                </View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
}

export default OtherInfos;
