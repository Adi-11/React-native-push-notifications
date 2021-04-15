import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../styles/col';
import {IMAGE_SIZE, SPACING} from '../../styles/constants';

interface TypeThreeNotificationComponentProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  navigationRoute: string;
}
export const TypeThreeNotificationComponent: React.FC<TypeThreeNotificationComponentProps> = ({
  buttonText,
  description,
  imageUrl,
  navigationRoute,
  title,
}) => {
  return (
    <View style={styles.cardTHREE}>
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
      <View style={styles.mainContentViewTHREE}>
        <Text style={styles.titleTextTHREE}>{title}</Text>
        <Text style={styles.descriptionTHREE} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.localTHREE}>
          <TouchableOpacity onPress={() => console.log(navigationRoute)}>
            <Text style={styles.btnTextTHREE}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTHREE: {
    flexDirection: 'row',
    padding: SPACING / 2,
    borderRadius: 20,
    width: '90%',
    backgroundColor: '#bac2cf',
    marginBottom: SPACING,
  },
  mainContentViewTHREE: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  descriptionTHREE: {
    fontSize: 16,
    textAlignVertical: 'top',
    color: color.DARK_COLOR,
    flexWrap: 'wrap',
  },
  titleTextTHREE: {
    fontSize: 22,
    fontWeight: '600',
    color: color.DARK_COLOR,
    marginBottom: 10,
  },
  btnTextTHREE: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 5,
  },
  localTHREE: {
    width: 120,
    height: 35,
    backgroundColor: color.PRIMARY_COLOR,
    margin: 10,
    borderRadius: 10,
    marginLeft: 80,
  },
});
