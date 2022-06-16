import React from 'react';
import {StyleSheet, Text, useColorScheme, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BaseScaler from './Scaler';

export default function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';

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
          console.log(
            BaseScaler.getBaseHeight(),
            BaseScaler.getBaseWidth(),
            BaseScaler.getCustomRatio(),
            BaseScaler.getWidthBasedTransformValue(12),
            BaseScaler.getHeightBasedTransformValue(12)
          );

          BaseScaler.setBaseHeight(812);
          BaseScaler.setBaseWidth(375);

          console.log(
            BaseScaler.getBaseHeight(),
            BaseScaler.getBaseWidth(),
            BaseScaler.getCustomRatio(),
            BaseScaler.getWidthBasedTransformValue(12),
            BaseScaler.getHeightBasedTransformValue(12),
          );
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
