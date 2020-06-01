import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  FlatList
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import BookForm from './bookFormScreen';
import { appStyle } from '../css/appStyle';
import BookCard from '../custom/card';
import CustomButton from '../custom/outlineButton';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [details, setDetails] = useState([
    {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      genre: 'historical novel',
      description: 'The novel tells the story of the French Doctor Manette, his 18-year-long imprisonment in the Bastille in Paris and his release.',
      id: '1'
    },
    {
      title: 'Dracula',
      author: 'Bram Stoker',
      genre: 'horror, gothic',
      description: 'The novel tells the story of Dracula\'s attempt to move from Transylvania to England so that he may find new blood and spread the undead curse.',
      id: '2'
    },
    {
      title: 'The Autobiography of Malcolm X',
      author: 'Alex Haley, Malcolm X',
      genre: 'autobiography',
      description: 'The Autobiography is a spiritual conversion narrative that outlines Malcolm X\'s philosophy of black pride, black nationalism, and pan- Africanism.',
      id: '3'
    },
  ]);

  const addBook = (detail) => {
    detail.id = Math.random().toString();
    setDetails((bookDetails) => {
      return [detail, ...bookDetails];
    });
    setModalVisible(false);
  };

  return (
    <View style={appStyle.container}>
      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.modalInfo}>
            <MaterialIcons
              name='close'
              size={30}
              style={styles.closeBtn}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
            <BookForm addBook={addBook} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <CustomButton text='Add Book' onPress={() => setModalVisible(true)} />

      <FlatList
        data={details}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('BookInfo', item)}
          >
            <BookCard>
              <Text style={appStyle.bookTitle}>{ item.title }</Text>
            </BookCard>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalInfo: {
    flex: 1,
  },
  closeBtn: {
    marginTop: 25,
    marginBottom: 10,
    borderColor: '#b00020',
    color: '#b00020',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
  },
});
