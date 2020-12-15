import 'react-native-gesture-handler';
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgUri, Circle, G, Svg} from 'react-native-svg';
import Donut from '../../components/Donut';
function HomeScreen({}) {
  return (
    <View style={styles.container}>
      <Donut />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});
