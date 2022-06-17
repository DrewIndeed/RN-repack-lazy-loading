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
  // get current device dimensions
  const {height, width} = useWindowDimensions();

  // test integer values for each inner views
  const testValues = [35, 45, 65]; // sum = 290

  // test colors for the first 3 inner views
  const testColors1 = ['red', 'blue', 'green'];

  // test colors for the last 3 inner views
  const testColors2 = ['cyan', 'pink', 'orange'];

  // margin top for the second section
  const testContainerMarginTop = BaseScaler.getWidthBasedTransformValue(30);

  // font size of the views
  const sectionFontSize = BaseScaler.getWidthBasedTransformValue(20, 0.75);

  // the other dimension of the section container ̣(e.g it width is already 290, its height will be this value)
  const otherDimension = BaseScaler.getWidthBasedTransformValue(200);

  // array of transformed values of the integer values for each inner views
  const transformDimensionsArray = testValues.map(v =>
    BaseScaler.getWidthBasedTransformValue(v),
  );

  // sum of the values of the above array
  const sumOfTransformValues = transformDimensionsArray.reduce(
    (acc, cur) => acc + cur,
    0,
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'yellow'}}>
      <ScrollView>
        {/* horizontally orientated section */}
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

        {/* button to print out device's dimensions and percentToWholeWidth */}
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

        {/* vertically orientated section  */}
        <View
          style={{
            display: 'flex',
            marginTop: testContainerMarginTop,
          }}>
          {transformDimensionsArray.map((val, idx) => (
            <View
              key={val + idx}
              style={{
                height: transformDimensionsArray[idx],
                width: otherDimension,
                backgroundColor: testColors2[idx],
              }}>
              <Text style={{fontSize: sectionFontSize}}>
                {(
                  (transformDimensionsArray[idx] / sumOfTransformValues) *
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
