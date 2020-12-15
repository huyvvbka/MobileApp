import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function SettingScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
      <Button title="Go to Details" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
