import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../styles/col';
import {IMAGE_SIZE, SPACING} from '../../styles/constants';

interface TypeOneNotificationComponentProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  navigationRoute: string;
}
export const TypeOneNotificationComponent: React.FC<TypeOneNotificationComponentProps> = ({
  buttonText,
  description,
  imageUrl,
  navigationRoute,
  title,
}) => {
  return (
    <View style={styles.cardONE}>
      <Image
        style={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
          borderRadius: 20,
          marginRight: SPACING / 2,
        }}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.mainContentViewONE}>
        <Text style={styles.titleTextONE}>{title}</Text>
        <Text style={styles.descriptionONE} numberOfLines={4}>
          {description}
        </Text>
        <View style={styles.localONE}>
          <TouchableOpacity onPress={() => console.log(navigationRoute)}>
            <Text style={styles.btnTextONE}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardONE: {
    flexDirection: 'row',
    padding: SPACING,
    borderRadius: 20,
    width: '90%',
    backgroundColor: '#bac2cf',
    marginBottom: SPACING,
    height: 200,
  },
  mainContentViewONE: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  descriptionONE: {
    fontSize: 16,
    textAlignVertical: 'top',
    color: color.DARK_COLOR,
    flexWrap: 'wrap',
  },
  titleTextONE: {
    fontSize: 22,
    fontWeight: '600',
    color: color.DARK_COLOR,
    marginBottom: 10,
  },
  btnTextONE: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 5,
  },
  localONE: {
    width: 120,
    height: 35,
    backgroundColor: color.PRIMARY_COLOR,
    margin: 10,
    borderRadius: 10,
    marginLeft: 80,
  },
});
