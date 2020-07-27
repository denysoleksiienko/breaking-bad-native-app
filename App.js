import React from 'react';
import axios from 'axios';

import {View, StyleSheet, ImageBackground} from 'react-native';

import {Header} from './src/components/Header';
import {Search} from './src/components/Search';
import {CharacterGrid} from './src/components/CharacterGrid';

export const App = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios(
          `https://breakingbadapi.com/api/characters?name=${query}`,
        );
        setItems(response.data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/assets/bg.jpg')}
        style={styles.image}>
        <Header />
        <Search getQuery={(q) => setQuery(q)} />
        <CharacterGrid loading={loading} items={items} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
