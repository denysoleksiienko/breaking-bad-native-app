import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const CharacterItem = ({name}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});
