import throttle from 'lodash.throttle';
import React, {lazy, Suspense} from 'react';
import {Text, View} from 'react-native';

const Section1 = lazy(() =>
  import(/* webpackChunkName: "andrew-section1" */ './Section1'),
);
const Section2 = lazy(() =>
  import(/* webpackChunkName: "andrew-section2" */ './Section2'),
);
const Section3 = lazy(() =>
  import(/* webpackChunkName: "andrew-section3" */ './Section3'),
);
const Section4 = lazy(() =>
  import(/* webpackChunkName: "andrew-section4" */ './Section4'),
);

export default function Remote() {
  throttle(() => {}, 0);
  return (
    <View>
      <Suspense fallback={<Text>Getting Sections ...</Text>}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Suspense>
    </View>
  );
}
