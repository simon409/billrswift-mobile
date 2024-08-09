import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabNavigationState } from '@react-navigation/native';

export interface TabBarProps extends BottomTabBarProps {
  state: TabNavigationState<any>;
  descriptors: Record<string, any>;
  navigation: any;
}
