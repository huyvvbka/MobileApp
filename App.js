import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';
import SettingScreen from './src/screen/SettingScreen';
import {Button} from 'react-native';
import HeaderBackground from './src/components/Header/HeaderBackground';
import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({navigation}) => ({
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Button
                onPress={() => navigation.goBack()}
                title="Back"
                // color="#ff"
              />
            ),
            headerBackground: () => <HeaderBackground />,
            headerTitleAlign: 'center',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            transitionSpec: {
              open: TransitionSpecs.TransitionIOSSpec,
              close: TransitionSpecs.TransitionIOSSpec,
            },
          })}
          headerMode="float"
          animation="fade">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerLeft: null}}
          />
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={({route}) => ({title: route.params.name})}
          />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
