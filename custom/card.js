import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card (props) {
  return (
    <View style={styles.customCard}>
      <View style={styles.cardData}>
        { props.children }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customCard: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 5,
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    marginVertical: 7,
    marginHorizontal: 5,
  },
  cardData: {
    marginVertical: 15,
    marginHorizontal: 17,
  },
});
