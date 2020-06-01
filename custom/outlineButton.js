import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function CustomButton ({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7ae582',
  },
  btnText: {
    color: '#7ae582',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
