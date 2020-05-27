import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export default function AppHeader({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <MaterialIcons
        name='menu'
        onPress={() => navigation.openDrawer()}
        size={30}
        style={styles.menuIcon}
      />
      <View>
        <Text style={styles.headerText}>{ title }</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    color: '#fff',
    position: 'absolute',
    left: 12,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
    left: 10,
  },
});
