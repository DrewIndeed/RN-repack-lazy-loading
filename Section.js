import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useWindowDimensions,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Section({children, title}) {
  const {height, width} = useWindowDimensions();
  const isDarkMode = useColorScheme() === 'dark';

  const getStyleValuesRatioToScreen = (targetValue, width, height) => ({
    r2w: Number.parseFloat(targetValue / width).toFixed(4),
    r2h: Number.parseFloat(targetValue / height).toFixed(4),
  });

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Button
        title="Press Me Lord"
        onPress={() => {
          const {r2w, r2h} = getStyleValuesRatioToScreen(
            styles.sectionTitle.fontSize,
            width,
            height,
          );
          alert(`Result: r2w = ${r2w}; r2h = ${r2h}`);
        }}
      />
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
