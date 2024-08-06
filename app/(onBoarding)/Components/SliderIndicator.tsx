import React from 'react';
import { StyleSheet, View } from 'react-native';

interface SliderIndicatorProps {
  index: number;
  length: number;
}

const SliderIndicator = ({ index, length }: SliderIndicatorProps) => {
  return (
    <View style={styles.indicatorContainer}>
      {Array.from({ length }, (_, i) => (
        <View key={i} style={styles.indicatorWrapper}>
          {i === index ? (
            <View style={styles.selectedIndicatorWrapper}>
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle} />
              </View>
            </View>
          ) : (
            <View style={styles.defaultIndicator} />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorWrapper: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#CBC9D9',
  },
  selectedIndicatorWrapper: {
    position: 'relative',
    width: 13,
    height: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    borderWidth: 1,
    borderColor: '#EC9850',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#EC9850',
  },
});

export default SliderIndicator;
