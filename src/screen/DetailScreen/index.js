import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function DetailScreen({route, navigation}) {
  const {name} = route.params;
  return (
    <View style={styles.container}>
      <Text>Hello {name}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Setting')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
