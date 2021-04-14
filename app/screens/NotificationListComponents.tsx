import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../styles/col';
const IMAGE_SIZE = 70;
const SPACING = 20;
const ANIMATION = IMAGE_SIZE + SPACING * 3;
interface TypeZeroNotificationComponentProps {}

export const TypeZeroNotificationComponent: React.FC<TypeZeroNotificationComponentProps> = ({}) => {
  const imageURI =
    'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  return (
    <View style={styles.cardZERO}>
      <Image
        style={[StyleSheet.absoluteFillObject, {borderRadius: SPACING}]}
        source={{
          uri: imageURI,
        }}
        blurRadius={3}
      />
      <View style={styles.mainContentViewZERO}>
        <Text style={styles.titleTextZERO}>Type ZERO notification</Text>
        <Text style={styles.descriptionZERO}>
          Nisi proident ut dolore dolor
        </Text>
        <View style={styles.local}>
          <TouchableOpacity onPress={() => console.log('You got it!!!')}>
            <Text style={styles.btnTextZERO}>Get it Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
interface TypeOneNotificationComponentProps {}
export const TypeOneNotificationComponent: React.FC<TypeOneNotificationComponentProps> = ({}) => {
  const imageURI =
    'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
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
          uri: imageURI,
        }}
      />
      <View style={styles.mainContentViewONE}>
        <Text style={styles.titleTextONE}>Type ONE notification</Text>
        <Text style={styles.descriptionONE}>
          Nisi proident ut dolore dolor Nisi proident ut dolore dolor Nisi
          proident ut dolore dolor Nisi proident ut dolore dolor
        </Text>
        <View style={styles.localONE}>
          <TouchableOpacity onPress={() => console.log('You got it!!!')}>
            <Text style={styles.btnTextZERO}>Get it Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

interface TypeTwoNotificationComponentProps {}
export const TypeTwoNotificationComponent: React.FC<TypeTwoNotificationComponentProps> = ({}) => {
  const imageURI =
    'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
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
          uri: imageURI,
        }}
      />
      <View style={styles.mainContentViewTWO}>
        <Text style={styles.titleTextTWO}>Type TWO notification</Text>
        <Text style={styles.descriptionTWO}>
          Nisi proident ut dolore dolor Nisi proident ut dolore dolor Nisi
          proident ut dolore dolor Nisi proident ut dolore dolor
        </Text>
        <View style={styles.localTWO}>
          <TouchableOpacity onPress={() => console.log('You got it!!!')}>
            <Text style={styles.btnTextZERO}>Get it Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

interface TypeThreeNotificationComponentProps {}
export const TypeThreeNotificationComponent: React.FC<TypeThreeNotificationComponentProps> = ({}) => {
  const imageURI =
    'https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
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
          uri: imageURI,
        }}
      />
      <View style={styles.mainContentViewTHREE}>
        <Text style={styles.titleTextTHREE}>Type THREE notification</Text>
        <Text style={styles.descriptionTHREE} numberOfLines={2}>
          Nisi proident ut dolore dolor Nisi proident ut dolore dolor Nisi
          proident ut dolore dolor Nisi proident ut dolore dolor
        </Text>
        <View style={styles.localTHREE}>
          <TouchableOpacity onPress={() => console.log('You got it!!!')}>
            <Text style={styles.btnTextZERO}>Get it Now</Text>
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

  cardONE: {
    flexDirection: 'row',
    padding: SPACING,
    borderRadius: 20,
    width: '90%',
    backgroundColor: '#bac2cf',
    marginBottom: SPACING,
    height: '25%',
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
  cardTWO: {
    flexDirection: 'row',
    padding: SPACING,
    borderRadius: 20,
    width: '90%',
    backgroundColor: '#bac2cf',
    marginBottom: SPACING,
    height: '25%',
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
