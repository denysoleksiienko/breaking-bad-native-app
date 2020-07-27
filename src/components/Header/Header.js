import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.img}
        resizeMode="center"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {},
});
