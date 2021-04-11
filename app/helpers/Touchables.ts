import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

export const TouchableComponent: React.ElementType =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
