import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';

import {CharacterItem} from '../CharacterItem';

export const CharacterGrid = ({items}) => {
  const renderItem = ({item}) => (
    <CharacterItem name={item.name} key={item.char_id} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
