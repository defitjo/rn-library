import React from 'react'
import {
  StyleSheet,
  View, 
  Text,
  Linking 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { appStyle } from '../css/appStyle';

export default function AboutScreen() {
  return (
    <View style={appStyle.container}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Hic eius quae omnis nulla mollitia laboriosam numquam tempora vel rem qui magnam ea voluptate illum, obcaecati provident vitae tenetur fugiat adipisci.
      </Text>
      <View style={styles.gitInfo}>
        <FontAwesome
        name='github'
        size={25}
      />
        <Text
          style={styles.gitLink}
          onPress={() => Linking.openURL('https://www.github.com/defitjo')}
        >
          Devon
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  gitInfo: {
    flexDirection: 'row',
    marginVertical: 10,
    alignSelf: 'center',
  },
  gitLink: {
    color: 'blue',
    marginHorizontal: 10,
    fontSize: 20,
  }
});
