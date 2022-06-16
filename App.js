import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import BaseScaler from './Scaler';

const App = () => {
  const {height, width} = useWindowDimensions();

  const testValues = [80, 120, 200];
  const testColors1 = ['red', 'blue', 'green'];
  const testColors2 = ['cyan', 'pink', 'orange'];
  const sectionMarginTop = BaseScaler.getWidthBasedTransformValue(30);

  const testViewWidth = BaseScaler.getWidthBasedTransformValue(800);
  const testViewHeight = BaseScaler.getWidthBasedTransformValue(300);

  const baseHeightForHorizontal = BaseScaler.getWidthBasedTransformValue(300);
  const widthsForHorizontal = testValues.map(v =>
    BaseScaler.getWidthBasedTransformValue(v),
  );

  const baseWidthForVertival = BaseScaler.getWidthBasedTransformValue(360);
  const heightsForVertival = testValues.map(v =>
    BaseScaler.getWidthBasedTransformValue(v),
  );

  const sumOfTransformValues = widthsForHorizontal.reduce(
    (acc, cur) => acc + cur,
    0,
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: testViewWidth,
            height: testViewHeight,
            marginTop: sectionMarginTop,
          }}>
          {widthsForHorizontal.map((val, idx) => (
            <View
              key={val + idx}
              style={{
                height: baseHeightForHorizontal,
                width: widthsForHorizontal[idx],
                backgroundColor: testColors1[idx],
              }}>
              <Text style={{color: 'white'}}>
                {(widthsForHorizontal[idx] / sumOfTransformValues) * 100} % of{' '}
                {sumOfTransformValues} in WIDTH
              </Text>
            </View>
          ))}
        </View>

        <View style={{backgroundColor: 'purple'}}>
          <Button
            color="black"
            title="Press Me Son"
            onPress={() =>
              alert(
                `w is ${width}; h is ${height}; testViewWidth: ${
                  testViewWidth / 2
                }; testViewHeight: ${testViewHeight}; sectionMarginTop: ${sectionMarginTop}`,
              )
            }
          />
        </View>

        <View
          style={{
            display: 'flex',
            marginTop: sectionMarginTop,
            width: testViewWidth,
            height: testViewHeight,
          }}>
          {heightsForVertival.map((val, idx) => (
            <View
              key={val + idx}
              style={{
                height: heightsForVertival[idx],
                width: baseWidthForVertival,
                backgroundColor: testColors2[idx],
              }}>
              <Text>
                {(heightsForVertival[idx] / sumOfTransformValues) * 100} % of{' '}
                {sumOfTransformValues} in HEIGHT
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
