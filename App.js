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

  const testViewWidth = Math.ceil(BaseScaler.getWidthBasedTransformValue(800));
  const testViewHeight = Math.ceil(BaseScaler.getWidthBasedTransformValue(300));

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
      <Button
        color="red"
        title="Press Me Son"
        onPress={() =>
          alert(
            `w is ${width}; h is ${height}; testViewWidth: ${testViewWidth}; testViewHeight: ${testViewHeight}`,
          )
        }
      />

      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: testViewWidth,
            height: testViewHeight,
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
                {Math.ceil(
                  (widthsForHorizontal[idx] / sumOfTransformValues) * 100,
                )}{' '}
                % of {sumOfTransformValues}
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            display: 'flex',
            marginTop: BaseScaler.getWidthBasedTransformValue(30),
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
                {Math.ceil(
                  (heightsForVertival[idx] / sumOfTransformValues) * 100,
                )}{' '}
                % of {sumOfTransformValues}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
