import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TouchableComponent} from './Touchables';

const {width} = Dimensions.get('window');
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;

const IMAGE_SIZE = 70;
const SPACING = 20;

export enum Cards {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
}

interface CardProps {
  type: Cards;
}

export default ({type}: CardProps) => {
  let source: number;
  switch (type) {
    case Cards.Card1:
      source = require('../assets/card1.jpg');
      break;
    case Cards.Card2:
      source = require('../assets/card2.jpg');
      break;
    case Cards.Card3:
      source = require('../assets/card3.jpg');
      break;
    case Cards.Card4:
      source = require('../assets/card4.jpg');
      break;
    case Cards.Card5:
      source = require('../assets/card5.jpg');
      break;
    case Cards.Card6:
      source = require('../assets/card6.jpg');
      break;
    case Cards.Card7:
      source = require('../assets/card1.jpg');
      break;
    case Cards.Card8:
      source = require('../assets/card2.jpg');
      break;
    case Cards.Card9:
      source = require('../assets/card3.jpg');
      break;
    case Cards.Card10:
      source = require('../assets/card4.jpg');
      break;
    case Cards.Card11:
      source = require('../assets/card5.jpg');
      break;
    case Cards.Card12:
      source = require('../assets/card6.jpg');
      break;
    default:
      throw Error('Invalid card style');
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: SPACING,
        borderRadius: 20,
        width: '100%',
        paddingRight: SPACING * 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        // elevation: 7,
        shadowOffset: {width: 0, height: 7},
        shadowColor: '#333aff',
        shadowOpacity: 1,
        shadowRadius: 30,
      }}>
      <Image style={styles.card} {...{source}} />
      <View>
        <Text style={{fontSize: 22, fontWeight: '600'}}>Notifcation 1</Text>
        <Text style={{fontSize: 16}}>
          Description Of the notification Yawlit!!!
        </Text>
        <View style={styles.local}>
          <TouchableOpacity onPress={() => console.log('You got it!!!')}>
            <View style={styles.txt}>
              <Text style={{fontSize: 16}}>Get it now!!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 50,
    marginRight: SPACING / 2,
  },

  local: {
    width: 100,
    height: 35,
    backgroundColor: '#fc5c65',
    marginBottom: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  txt: {
    margin: 5,
  },
});
