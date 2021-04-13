import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
} from 'react-native';
import Card, {
  Cards,
  CARD_HEIGHT as DEFAULT_CARD_HEIGHT,
  CARD_WIDTH,
} from '../helpers/CardAssects';
// import WalletCard from './WalletCard';

export const MARGIN = 16;
export const CARD_HEIGHT = DEFAULT_CARD_HEIGHT + MARGIN * 2;
const {height: wHeight} = Dimensions.get('window');
const height = wHeight - 64;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const cards = [
  {
    type: Cards.Card1,
  },
  {
    type: Cards.Card2,
  },
  {
    type: Cards.Card3,
  },
  {
    type: Cards.Card4,
  },
  {
    type: Cards.Card5,
  },
  {
    type: Cards.Card6,
  },
  {
    type: Cards.Card7,
  },
  {
    type: Cards.Card8,
  },
  {
    type: Cards.Card9,
  },
  {
    type: Cards.Card10,
  },
  {
    type: Cards.Card11,
  },
  {
    type: Cards.Card12,
  },
];

export const Wallet = () => {
  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {
    useNativeDriver: true,
  });
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      contentContainerStyle={{
        padding: 20,
        paddingTop: StatusBar.currentHeight || 42,
        backgroundColor: 'rgba(225,225,225, 0.9)',
      }}
      data={cards}
      renderItem={({item: {type}, index}) => (
        <WalletCard {...{index, y, type}} key={index} />
      )}
      keyExtractor={item => (item as any).index}
      {...{onScroll}}
    />
  );
};

interface WalletCardProps {
  y: Animated.Value;
  index: number;
  type: Cards;
}

const WalletCard = ({type, y, index}: WalletCardProps) => {
  const position = Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = -CARD_HEIGHT;
  const isTop = 0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;
  const translateY = Animated.add(
    Animated.add(
      y,
      y.interpolate({
        inputRange: [0, 0.00001 + index * CARD_HEIGHT],
        outputRange: [0, -index * CARD_HEIGHT],
        extrapolateRight: 'clamp',
      }),
    ),
    position.interpolate({
      inputRange: [isBottom, isAppearing],
      outputRange: [0, -CARD_HEIGHT / 4],
      extrapolate: 'clamp',
    }),
  );
  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp',
  });
  const opacity = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
  });
  return (
    <Animated.View
      style={[styles.card, {opacity, transform: [{translateY}, {scale}]}]}
      key={index}>
      <Card {...{type}} key={index} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: MARGIN,
    alignSelf: 'center',
    width: '100%',
  },
});
