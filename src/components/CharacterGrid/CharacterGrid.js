import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
} from 'react-native';

import {CharacterItem} from '../CharacterItem';

export const CharacterGrid = ({loading, items}) => {
  const renderItem = ({item}) => (
    <CharacterItem key={item.char_id} item={item} />
  );
  return loading ? (
    <Text style={styles.loading}>Loading...</Text>
  ) : (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.char_id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35,
    color: '#fff',
  },
});
