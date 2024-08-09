import React from 'react';
import { Tabs } from 'expo-router';
import LottieTabIcon from '../Components/LottieTabIcon';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Aujourd\'hui',
          tabBarIcon: ({ focused }) => (
            <LottieTabIcon
              focused={focused}
              source={
                focused
                  ? require('@/assets/Lottie/aujourduit orange.json')
                  : require('@/assets/Lottie/aujourdui black.json')
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused }) => (
            <LottieTabIcon
              focused={focused}
              source={
                focused
                  ? require('@/assets/Lottie/menu orange.json')
                  : require('@/assets/Lottie/menu black.json')
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="conversation"
        options={{
          title: 'Conversation',
          tabBarIcon: ({ focused }) => (
            <LottieTabIcon
              focused={focused}
              source={
                focused
                  ? require('@/assets/Lottie/chat orange.json')
                  : require('@/assets/Lottie/chat black.json')
              }
            />
          ),
        }}
      />
      {/* Add more Tabs.Screen components as needed */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  tabBarItem: {
    borderRadius: 15,
    margin: 5,
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
});
