import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

function HeaderBackground() {
  return (
    <Image
      source={{
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
      }}
      style={StyleSheet.absoluteFill}
    />
  );
}

export default HeaderBackground;
