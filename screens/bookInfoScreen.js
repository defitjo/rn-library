import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { appStyle } from '../css/appStyle';
import Card from '../custom/card';

const Separator = () => {
  return <View style={appStyle.separator} />
};

export default function BookInfo({ route, navigation }) {
  const { title, author, genre, description } = route.params;

  return (
    <View style={appStyle.container}>
      <Card>
        <Text style={appStyle.bookTitle}>{ title }</Text>
        <Text style={appStyle.descriptionText}>{ author }</Text>
        <Text style={appStyle.descriptionText}>Genre: { genre }</Text>
        <Text style={appStyle.descriptionText}>{ description }</Text>
        <Separator />
        <Button title='go back' onPress={() => navigation.goBack()} />
      </Card>
    </View>
  );
};
