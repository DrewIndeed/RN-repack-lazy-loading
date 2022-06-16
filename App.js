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

  const testValues = [35, 45, 65];
  const testColors1 = ['red', 'blue', 'green'];
  const testColors2 = ['cyan', 'pink', 'orange'];

  const testContainerMarginTop = BaseScaler.getWidthBasedTransformValue(30);
  const sectionFontSize = BaseScaler.getWidthBasedTransformValue(20, 0.75);

  const otherDimension = BaseScaler.getWidthBasedTransformValue(200);

  const transformDimensionsArray = testValues.map(v =>
    BaseScaler.getWidthBasedTransformValue(v),
  );

  const heightsForVertival = testValues.map(v =>
    BaseScaler.getWidthBasedTransformValue(v),
  );

  const sumOfTransformValues = transformDimensionsArray.reduce(
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
            marginTop: testContainerMarginTop,
          }}>
          {transformDimensionsArray.map((val, idx) => (
            <View
              key={val + idx}
              style={{
                height: otherDimension,
                width: transformDimensionsArray[idx],
                backgroundColor: testColors1[idx],
              }}>
              <Text style={{color: 'white', fontSize: sectionFontSize}}>
                {(
                  (transformDimensionsArray[idx] / sumOfTransformValues) *
                  100
                ).toFixed(2)}{' '}
                % of {sumOfTransformValues} in WIDTH
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
                `w is ${width}; h is ${height}; percentToWholeWidth: ${
                  (sumOfTransformValues / width).toFixed(4) * 100
                } %`,
              )
            }
          />
        </View>

        <View
          style={{
            display: 'flex',
            marginTop: testContainerMarginTop,
          }}>
          {heightsForVertival.map((val, idx) => (
            <View
              key={val + idx}
              style={{
                height: heightsForVertival[idx],
                width: otherDimension,
                backgroundColor: testColors2[idx],
              }}>
              <Text style={{fontSize: sectionFontSize}}>
                {(
                  (heightsForVertival[idx] / sumOfTransformValues) *
                  100
                ).toFixed(2)}{' '}
                % of {sumOfTransformValues} in HEIGHT
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
