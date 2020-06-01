import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { appStyle } from '../css/appStyle';
import CustomButton from '../custom/button';

const bookSchema = yup.object({
  title: yup.string().required().min(3),
  author: yup.string().required().min(5),
  genre: yup.string().required().min(3),
  description: yup.string().required().min(10),
});

export default function BookForm({ addBook }) {

  return (
    <ScrollView style={appStyle.container}>
      <Formik
        initialValues={{ title: '', author: '', genre: '', description: '' }}
        validationSchema={bookSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addBook(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={appStyle.input}
              placeholder='Title'
              value={props.values.title}
              onBlur={props.handleBlur('title')}
              onChangeText={props.handleChange('title')}
            />
            <Text style={appStyle.errorMsg}>
              { props.touched.title && props.errors.title }
            </Text>

            <TextInput
              style={appStyle.input}
              placeholder='Author'
              value={props.values.author}
              onBlur={props.handleBlur('author')}
              onChangeText={props.handleChange('author')}
            />
            <Text style={appStyle.errorMsg}>
              { props.touched.author && props.errors.author }
            </Text>

            <TextInput
              style={appStyle.input}
              placeholder='Genre'
              value={props.values.genre}
              onBlur={props.handleBlur('genre')}
              onChangeText={props.handleChange('genre')}
            />
            <Text style={appStyle.errorMsg}>
              { props.touched.genre && props.errors.genre }
            </Text>

            <TextInput
              style={appStyle.input}
              placeholder='Description'
              value={props.values.description}
              onBlur={props.handleBlur('description')}
              onChangeText={props.handleChange('description')}
              multiline minHeight={50}
            />
            <Text style={appStyle.errorMsg}>
              { props.touched.description && props.errors.description }
            </Text>

            <CustomButton text='Submit' onPress={props.handleSubmit} />

          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
