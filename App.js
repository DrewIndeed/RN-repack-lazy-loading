import React, {lazy, Suspense} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  useWindowDimensions,
  Button,
} from 'react-native';
// import {StartupTime} from 'react-native-startup-time';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import BaseScaler from './Scaler';

const Remote = lazy(() =>
  import(/* webpackChunkName: "andrew-remote" */ './Remote'),
);

const App = () => {
  const {height, width} = useWindowDimensions();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Button
        color="red"
        title="Press Me Son"
        onPress={() => alert(`w is ${width}; h is ${height}`)}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text style={{fontSize: BaseScaler.getWidthBasedTransformValue(30)}}>
          Welcome to React Native
        </Text>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Suspense fallback={<Text>Loading Remote at App ...</Text>}>
            <Remote />
          </Suspense>
        </View>
      </ScrollView>

      {/* <StartupTime style={{marginTop: 180}} /> */}
    </SafeAreaView>
  );
};

export default App;
