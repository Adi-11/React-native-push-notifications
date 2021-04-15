import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../styles/col';
const IMAGE_SIZE = 70;
const SPACING = 20;
const ANIMATION = IMAGE_SIZE + SPACING * 3;
interface TypeZeroNotificationComponentProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  navigationRoute: string;
}

export const TypeZeroNotificationComponent: React.FC<TypeZeroNotificationComponentProps> = ({
  buttonText,
  description,
  imageUrl,
  navigationRoute,
  title,
}) => {
  return (
    <View style={styles.cardZERO}>
      <Image
        style={[StyleSheet.absoluteFillObject, {borderRadius: SPACING}]}
        source={{
          uri: imageUrl,
        }}
        blurRadius={3}
      />
      <View style={styles.mainContentViewZERO}>
        <Text style={styles.titleTextZERO}>{title}</Text>
        <Text style={styles.descriptionZERO} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.local}>
          <TouchableOpacity onPress={() => console.log(navigationRoute)}>
            <Text style={styles.btnTextZERO}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardZERO: {
    flexDirection: 'row',
    padding: SPACING,
    borderRadius: 20,
    width: '90%',
    backgroundColor: '#bac2cf',
    margin: SPACING,
  },
  mainContentViewZERO: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionZERO: {
    fontSize: 16,
    textAlignVertical: 'top',
    color: color.LIGHT_COLOR,
  },
  titleTextZERO: {
    fontSize: 22,
    fontWeight: '600',
    color: color.LIGHT_COLOR,
    marginBottom: 10,
  },
  btnTextZERO: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 5,
  },
  local: {
    width: 120,
    height: 35,
    backgroundColor: color.PRIMARY_COLOR,
    margin: 10,
    borderRadius: 10,
    marginBottom: 0,
  },
});
