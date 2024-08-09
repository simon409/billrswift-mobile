import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StyleSheet } from 'react-native';
import { useFocusEffect } from 'expo-router';

interface LottieTabIconProps {
  focused: boolean;
  source: any;
}

const LottieTabIcon: React.FC<LottieTabIconProps> = ({ focused, source }) => {
  const animationRef = useRef<LottieView>(null);

  useFocusEffect(
    React.useCallback(() => {
      if (focused) {
        animationRef.current?.play();
      } else {
        animationRef.current?.pause();
        animationRef.current?.reset(); // Optionally reset to the beginning
      }
    }, [focused])
  );

  return (
    <LottieView
      ref={animationRef}
      source={source}
      loop={false} // Ensures the animation does not loop
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 34,
    height: 34,
  },
});

export default LottieTabIcon;
