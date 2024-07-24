import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';


interface SwipingComponentProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  pages: React.FC[];
}

const SwipingComponent = ({selectedIndex, setSelectedIndex, pages} : SwipingComponentProps) => {
  const translateX = useSharedValue(0);

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    translateX.value = event.nativeEvent.translationX;
  };

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX < -50 && selectedIndex < pages.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else if (event.nativeEvent.translationX > 50 && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
      translateX.value = withSpring(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={[styles.pageContainer, animatedStyle]}>
          {pages.map((Page, index) => (
            <View key={index} style={StyleSheet.absoluteFill}>
              {index === selectedIndex && <Page />}
            </View>
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SwipingComponent;
