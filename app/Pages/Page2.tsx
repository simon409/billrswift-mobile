import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import { Link } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Page2 = () => {
    const titleOpacity = useSharedValue(0);
    const subTitleOpacity = useSharedValue(0);
    const titleInBackOpacity = useSharedValue(0);
    const buttonTranslateY = useSharedValue(50);

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

    const buttonAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonTranslateY.value }],
    }));

  return (
    <View style={styles.Container}>
      <View style={styles.TextsContainer}>
        <View>
          <Animated.Text style={[styles.TiteInBack, titleInBackAnimatedStyle]}>Bienvenue</Animated.Text>
          <Animated.Text style={[styles.Title, titleAnimatedStyle]}>Bienvenue</Animated.Text>
        </View>
        <Animated.Text style={[styles.SubTitle, subTitleAnimatedStyle]}>
          Conectez-vous avec votre compte Billrswift. En savoir plus
        </Animated.Text>
      </View>
      <Animated.View style={[styles.ButtonsContainer, buttonAnimatedStyle]}>
        <Button href='/login' text="Connectez-vous" style="Outlined" />
        <Button href='/register' text="Crée un compte" style="Filled" />
      </Animated.View>
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <LottieView
          autoPlay
          loop
          style={styles.LottieAnim1}
          source={require('../../assets/Lottie/BGOrangeYellow.json')}
        />
        <LottieView
          autoPlay
          loop
          style={styles.LottieAnim2}
          source={require('../../assets/Lottie/ManInSuite.json')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: Colors.light.background,
      paddingTop: '20%',
      paddingBottom: '10%',
      justifyContent: 'space-between',
    },
    TextsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: '20%',
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
        bottom: -10,
        left: 0,
        zIndex: -1,
        opacity: 0.1,
    },
    SubTitle: {
        fontSize: textSizes.large,
        color: Colors.light.textColorBlack,
    },
    ButtonsContainer: {
        flexDirection: 'column',
        width: '100%',
        gap: 10,
    },

    LottieAnim1: {
        width: '450%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: -1
    },
    LottieAnim2: {
        width: '150%',
        height: '100%',
        position: 'absolute',
        top: '-20%',
        right: '-60%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        zIndex: -1
    }
});

export default Page2;
