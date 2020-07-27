import React from 'react';
import axios from 'axios';

import {View, StyleSheet, ImageBackground} from 'react-native';

import {Header} from './src/components/Header/Header';
import {CharacterGrid} from './src/components/CharacterGrid/CharacterGrid';

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchItems = async () => {
      const response = await axios('https://breakingbadapi.com/api/characters');
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./src/assets/bg.jpg')}
        style={styles.image}>
        <Header />
        <CharacterGrid items={items} />
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

export default App;
