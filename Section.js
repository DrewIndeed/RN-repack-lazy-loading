import React from 'react';
import {StyleSheet, Text, useColorScheme, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BaseScaler from './Scaler';

export default function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      {title === 'Learn More' && (
        <Button
          title="Press Me Lord"
          onPress={() => {
            console.log(
              BaseScaler.getBaseHeight(),
              BaseScaler.getBaseWidth(),
              BaseScaler.getCustomRatio(),
              BaseScaler.getWidthBasedTransformValue(12),
              BaseScaler.getHeightBasedTransformValue(12),
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
      )}

      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>

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
    marginTop: BaseScaler.getWidthBasedTransformValue(32),
    paddingHorizontal: BaseScaler.getWidthBasedTransformValue(24),
  },
  sectionTitle: {
    fontSize: BaseScaler.getWidthBasedTransformValue(24),
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: BaseScaler.getWidthBasedTransformValue(8),
    fontSize: BaseScaler.getWidthBasedTransformValue(18),
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
