import { Colors } from '@/constants/Colors';
import { textSizes } from '@/constants/Sizes';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const Page2 = () => {
  // Get the screen width
  const screenWidth = Dimensions.get('window').width;

  // Calculate the animation size (square aspect ratio)
  const animationSize = screenWidth; // Adjust the percentage as needed

  const titleOpacity = useSharedValue(0);
  const subTitleOpacity = useSharedValue(0);
  const buttonTranslateY = useSharedValue(50);

  useEffect(() => {
    titleOpacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
    subTitleOpacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
    buttonTranslateY.value = withTiming(0, { duration: 1000, easing: Easing.out(Easing.exp) });
  }, []);

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: titleOpacity.value,
    };
  });

  const subTitleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: subTitleOpacity.value,
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: buttonTranslateY.value }],
    };
  });

  return (
    <View style={styles.Container}>
      <View style={styles.TextsContainer}>
        <Animated.Text style={[styles.Title, titleAnimatedStyle]}>
          Sachez où vous en êtes
        </Animated.Text>
        <Animated.Text style={[styles.SubTitle, subTitleAnimatedStyle]}>
          Consultez vos revenus et dèpenses en un clin d'œil.
        </Animated.Text>
      </View>
      <View>
        <LottieView
          autoPlay
          loop
          style={{
            width: '100%',
            height: animationSize,
            backgroundColor: '#fff',
          }}
          source={require('@/assets/Lottie/anime2.json')}
        />
      </View>
      <Animated.View style={buttonAnimatedStyle}>
        <TouchableOpacity onPress={() => { console.log('Pressed') }} style={styles.Button}>
          <Text style={styles.ButtonText}>Connectez-vous</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

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
    marginBottom: 20,
  },
  Title: {
    fontSize: textSizes.xxlarge,
    color: Colors.light.textColorOrange,
  },
  SubTitle: {
    fontSize: textSizes.large,
    color: Colors.light.textColorBlack,
  },
  Button: {
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: Colors.light.textColorOrange,
    borderWidth: 1,
    alignItems: 'center'
  },
  ButtonText: {
    fontSize: textSizes.large,
    color: Colors.light.textColorOrange,
  }
});

export default Page2;
