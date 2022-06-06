import React, {lazy, Suspense} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {StartupTime} from 'react-native-startup-time';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const Remote = lazy(() =>
  import(/* webpackChunkName: "andrew-remote" */ './Remote'),
);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Suspense fallback={<Text>Loading Remote at App ...</Text>}>
            <Remote />
          </Suspense>
        </View>

        <StartupTime style={{marginTop: 180}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
