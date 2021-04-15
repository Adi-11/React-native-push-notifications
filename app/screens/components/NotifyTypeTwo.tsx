import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {color} from '../../styles/col';
import {IMAGE_SIZE, SPACING} from '../../styles/constants';

interface TypeTwoNotificationComponentProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  navigationRoute: string;
}
export const TypeTwoNotificationComponent: React.FC<TypeTwoNotificationComponentProps> = ({
  buttonText,
  description,
  imageUrl,
  navigationRoute,
  title,
}) => {
  return (
    <View style={styles.cardTWO}>
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
      <View style={styles.mainContentViewTWO}>
        <Text style={styles.titleTextTWO}>{title}</Text>
        <Text style={styles.descriptionTWO} numberOfLines={4}>
          {description}
        </Text>
        <View style={styles.localTWO}>
          <TouchableOpacity onPress={() => Linking.openURL(navigationRoute)}>
            <Text style={styles.btnTextTWO}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardTWO: {
    flexDirection: 'row',
    padding: SPACING,
    borderRadius: 20,
    width: '90%',
    backgroundColor: '#bac2cf',
    marginBottom: SPACING,
    height: 200,
  },
  mainContentViewTWO: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  descriptionTWO: {
    fontSize: 16,
    textAlignVertical: 'top',
    color: color.DARK_COLOR,
    flexWrap: 'wrap',
  },
  titleTextTWO: {
    fontSize: 22,
    fontWeight: '600',
    color: color.DARK_COLOR,
    marginBottom: 10,
  },
  btnTextTWO: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 5,
  },
  localTWO: {
    width: 120,
    height: 35,
    backgroundColor: color.PRIMARY_COLOR,
    margin: 10,
    borderRadius: 10,
    marginLeft: 80,
  },
});
