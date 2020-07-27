import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

export const Search = ({getQuery}) => {
  const [text, setText] = React.useState('');

  const handleSearch = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <View style={styles.search}>
      <TextInput
        style={styles.text}
        onChangeText={(e) => handleSearch(e)}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 50,
    margin: 5,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
